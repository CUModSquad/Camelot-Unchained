/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import {client, events} from 'camelot-unchained';

import { UserInfo } from './User';
import ChatSession from './ChatSession';
import { chatState } from './ChatState';
import AtUserList from './AtUserList';

export interface ChatInputState {
  atUsers: string[];
  atUsersIndex: number;
  expanded: boolean;
};

export interface ChatInputProps {
  label: string;
  send: (text: string) => void;
  slashCommand: (command: string) => void;
  scroll: (extra?:number) => void;
};

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  _privateMessageHandler: any;
  tabUserList: string[] = [];
  tabUserIndex: number = null;
  sentMessages: string[] = [];
  sentMessageIndex: number = null;
  unsentMessageCache: string = null;
  constructor(props: ChatInputProps) {
    super(props);
    this.state = this.initialState();
    this._privateMessageHandler = events.on('cse-chat-private-message', (name: string) => {
      this.privateMessage(name);
    });
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.parseInput = this.parseInput.bind(this);
  }
  initialState(): ChatInputState {
    return {
      atUsers: [],
      atUsersIndex: 0,
      expanded: false
    }
  }

  componentWillUnmount() {
    if (this._privateMessageHandler) {
      events.off(this._privateMessageHandler);
    }
  }

  componentDidMount() {
    if (client.OnBeginChat) {
      client.OnBeginChat((cmdKind: number, text: string) => {
        this.getInputNode().focus();
        this.getInputNode().value = text;
      });
    }
  }

  selectAtUser = (user: string) => {
    const input: HTMLInputElement = this.getInputNode();
    const lastWord: RegExpMatchArray = input.value.match(/@([\S]*)$/);
    input.value = input.value.substring(0, lastWord.index + 1) + user + ' ';
    input.focus();
    this.setState({ atUsers: [], atUsersIndex: 0 } as any);
  }

  addToTempHistory(message:string) {
    // add message to temporary history
    this.sentMessageIndex = -1;
    if (message) {
      this.sentMessages.push(message);
      if (this.sentMessages.length > 25) this.sentMessages.shift();
    }
  }

  getInputNode(): HTMLInputElement {
    return this.refs['new-text'] as HTMLInputElement;
  }

  handleArrowKey(textArea: HTMLTextAreaElement, isDownArrow: boolean) {
      const offset:number = isDownArrow ? 1 : -1;

      if (this.state.atUsers.length > 0) {
        // If list of @users is displayed, arrow keys should navigate that list
        let newIndex:number = this.state.atUsersIndex + offset;
        newIndex = -1 >= newIndex ? this.state.atUsers.length - 1 : newIndex >= this.state.atUsers.length ? 0 : newIndex;
        this.setState({ atUsers: this.state.atUsers, atUsersIndex: newIndex  } as any);
      } else {
        // No lists are visible, arrow keys should navigate sent message history
        if (this.sentMessages.length > 0) {
          if (this.sentMessageIndex === null) {
            this.sentMessageIndex = isDownArrow ? 0 : this.sentMessages.length - 1;
          } else {
            this.sentMessageIndex = this.sentMessageIndex + offset;
            this.sentMessageIndex = -2 >= this.sentMessageIndex ? this.sentMessages.length - 1 : this.sentMessageIndex >= this.sentMessages.length ? this.unsentMessageCache && this.unsentMessageCache.length > 0 ? -1 : 0 : this.sentMessageIndex;
          }
          
          //if we haven't sent or cached this message yet cache it and treat it as index -1
          if(textArea.value && textArea.value.length > 0 && this.sentMessages.filter(str => textArea.value === str).length === 0) {
            this.unsentMessageCache = textArea.value;
          }

          textArea.value = -1 === this.sentMessageIndex ? this.unsentMessageCache : this.sentMessages[this.sentMessageIndex];
        }
      }
  }

  keyDown(e: React.KeyboardEvent): void {
    // current input field value
    const textArea: HTMLTextAreaElement = e.target as HTMLTextAreaElement;
    const value: string = textArea.value;

    // Complete username on tab key (9 = tab)
    if (e.keyCode === 9) {
      e.preventDefault();
      if (!this.tabUserList.length) {
        const chat: ChatSession = chatState.get('chat');
        const lastWord: string = value.match(/\b([\S]+)$/)[1];
        const endChar: string = lastWord === value ? ': ' : ' ';
        const matchingUsers: string[] = [];
        chat.getRoom(chat.currentRoom).users.forEach((u: JSX.Element) => {
          if (u.props.info.name.substring(0, lastWord.length) === lastWord) {
            matchingUsers.push(u.props.info.name);
          }
        });
        if (matchingUsers.length) {
          this.tabUserList = matchingUsers;
          this.tabUserIndex = 0;
          textArea.value += matchingUsers[0].substring(lastWord.length) + endChar;
          this.setState({ atUsers: [], atUsersIndex: 0 } as any);
        }
      } else {
        const oldTabIndex: number = this.tabUserIndex;
        const newTabIndex: number = oldTabIndex + 1 > this.tabUserList.length - 1 ? 0 : oldTabIndex + 1;
        const endChar: string = value.slice(-2) === ': ' ? ': ' : ' ';
        textArea.value = value.replace(new RegExp(this.tabUserList[oldTabIndex] + ':? $'), this.tabUserList[newTabIndex]) + endChar;
        this.tabUserIndex = newTabIndex;
        this.setState({ atUsers: [], atUsersIndex: 0 } as any);
      }
    } else {
      this.tabUserList = [];
      this.tabUserIndex = null;
    }

    // Handle up-arrow (38)
    if (e.keyCode === 38) {
      e.preventDefault();
      this.handleArrowKey(textArea, false);
    }

    // Handle down-arrow (40)
    if (e.keyCode === 40) {
      e.preventDefault();
      this.handleArrowKey(textArea, true);
    }

    // Send message on enter key (13 = enter)
    if (e.keyCode === 13) {
      if (e.shiftKey) {
        // Shift+ENTER = insert ENTER into text, and expand text area
        this.expand(e.target as HTMLTextAreaElement);
      }
      else if (!e.ctrlKey && !e.altKey) {
        // just ENTER
        e.preventDefault();
        if (this.state.atUsers.length > 0) {
          // complete @name expansion
          this.selectAtUser(this.state.atUsers[this.state.atUsersIndex]);
        } else {
          // Send message on enter key (13)
          this.send();
          this.collapse();
          this.getInputNode().blur();
        }
      }
    }
  }
  keyUp(e: React.KeyboardEvent): void {
    const textArea: HTMLTextAreaElement = e.target as HTMLTextAreaElement;

    // if user deletes all the content, shrink the input area again
    const value: string = textArea.value;
    if (value.length === 0) {
      this.collapse();
    }

    // if the user types a line that wraps and causes the text area to
    // scroll and we are not currently expanded, then expand.
    if (textArea.scrollHeight > textArea.offsetHeight && !this.state.expanded) {
      this.expand(textArea);
    }
  }
  parseInput(e: React.KeyboardEvent): void {
    const textArea: HTMLTextAreaElement = e.target as HTMLTextAreaElement;

    // Handle @name completion
    const lastWord: RegExpMatchArray = textArea.value.match(/(?:^|\s)@([\S]*)$/);
    const userList: string[] = [];
    const userFilter: string = lastWord && lastWord[1] ? lastWord[1] : '';
    if (lastWord) {
      const chat: ChatSession = chatState.get('chat');
      chat.getRoom(chat.currentRoom).users.forEach((u: JSX.Element) => {
        if (userFilter.length === 0 || u.props.info.name.toLowerCase().indexOf(userFilter.toLowerCase()) !== -1) {
          userList.push(u.props.info.name);
        }
      });
      userList.sort();
    }
    this.setState({ atUsers: userList, atUsersIndex: this.state.atUsersIndex} as any);
  }
  expand = (input: HTMLTextAreaElement): void => {
    if (!this.state.expanded) {
      const was: number = input.offsetHeight;
      this.setState({ expanded: true } as any);
      setTimeout(() => {
        // pass height of growth of input area as extra consideration for scroll logic
        this.props.scroll(input.offsetHeight - was);
      }, 100);     // queue it?
    }
  }
  collapse = (): void => {
    this.setState({ expanded: false } as any);
  }
  send() : void {
    const input: HTMLInputElement = this.getInputNode();
    let value: string = input.value;
    // remove leading space (not newline) and trailing white space
    while (value[0] === ' ') value = value.substr(1);
    while (value[value.length-1] === '\n') value = value.substr(0,value.length-1);
    if (value[0] !== '/' || !this.props.slashCommand(value.substr(1))) {
      // not a recognised / command, send it
      this.props.send(value);
    }

    // add message to temporary history
    this.addToTempHistory(value);
    this.unsentMessageCache = null;

    // reset input field after sending message
    input.value = '';
    input.focus();
  }
  privateMessage(name: string) : void {
    const input: HTMLInputElement = this.getInputNode();
    input.value = '/w ' + name + ' ';
    input.focus();
  }
  render() {
    const inputClass: string[] = [
      'chat-input',
      'input-field',
      'chat-' + (this.state.expanded ? 'expanded' : 'normal')
    ];
    return (
      <div className={inputClass.join(' ')}>
        <AtUserList users={this.state.atUsers} selectedIndex={this.state.atUsersIndex} selectUser={this.selectAtUser}/>
        <textarea className="materialize-textarea"
                  id="chat-text"
                  ref="new-text"
                  placeholder="Say something!"
                  onBlur={() => client.ReleaseInputOwnership()}
                  onFocus={() => client.RequestInputOwnership()}
                  onKeyDown={this.keyDown}
                  onKeyUp={this.keyUp}
                  onChange={this.parseInput}>
        </textarea>
      </div>
    );
  }
}

export default ChatInput;
