"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../../");
var ChatState_1 = require("./ChatState");
var AtUserList_1 = require("./AtUserList");
var ChatInput = /** @class */function (_super) {
    __extends(ChatInput, _super);
    function ChatInput(props) {
        var _this = _super.call(this, props) || this;
        _this.tabUserList = [];
        _this.tabUserIndex = null;
        _this.sentMessages = [];
        _this.sentMessageIndex = null;
        _this.selectAtUser = function (user) {
            var input = _this.getInputNode();
            var lastWord = input.value.match(/@([\S]*)$/);
            input.value = input.value.substring(0, lastWord.index + 1) + user + ' ';
            input.focus();
            _this.setState({ atUsers: [], atUsersIndex: 0 });
        };
        _this.getInputNode = function () {
            return _this.refs['new-text'];
        };
        _this.keyDown = function (e) {
            // current input field value
            var textArea = e.target;
            var value = textArea.value;
            // Complete username on tab key (9 = tab)
            if (e.keyCode === 9) {
                e.preventDefault();
                if (!_this.tabUserList.length) {
                    var chat = ChatState_1.chatState.get('chat');
                    var lastWord_1 = value.match(/\b([\S]+)$/)[1];
                    var endChar = lastWord_1 === value ? ': ' : ' ';
                    var matchingUsers_1 = [];
                    chat.getRoom(chat.currentRoom).users.forEach(function (u) {
                        if (u.info.name.substring(0, lastWord_1.length) === lastWord_1) {
                            matchingUsers_1.push(u.info.name);
                        }
                    });
                    if (matchingUsers_1.length) {
                        _this.tabUserList = matchingUsers_1;
                        _this.tabUserIndex = 0;
                        textArea.value += matchingUsers_1[0].substring(lastWord_1.length) + endChar;
                        _this.setState({ atUsers: [], atUsersIndex: 0 });
                    }
                } else {
                    var oldTabIndex = _this.tabUserIndex;
                    var newTabIndex = oldTabIndex + 1 > _this.tabUserList.length - 1 ? 0 : oldTabIndex + 1;
                    var endChar = value.slice(-2) === ': ' ? ': ' : ' ';
                    textArea.value = value.replace(new RegExp(_this.tabUserList[oldTabIndex] + ':? $'), _this.tabUserList[newTabIndex]) + endChar;
                    _this.tabUserIndex = newTabIndex;
                    _this.setState({ atUsers: [], atUsersIndex: 0 });
                }
            } else {
                _this.tabUserList = [];
                _this.tabUserIndex = null;
            }
            // Handle up-arrow (38)
            if (e.keyCode === 38) {
                e.preventDefault();
                if (_this.state.atUsers.length > 0) {
                    // If list of @users is displayed, arrow keys should navigate that list
                    var newIndex = _this.state.atUsersIndex - 1 === -1 ? _this.state.atUsers.length - 1 : _this.state.atUsersIndex - 1;
                    _this.setState({ atUsers: _this.state.atUsers, atUsersIndex: newIndex });
                } else {
                    // No lists are visible, arrow keys should navigate sent message history
                    if (_this.sentMessages.length > 0) {
                        if (_this.sentMessageIndex === null) {
                            _this.sentMessageIndex = _this.sentMessages.length - 1;
                        } else {
                            _this.sentMessageIndex = _this.sentMessageIndex - 1 === -1 ? 0 : _this.sentMessageIndex - 1;
                        }
                        textArea.value = _this.sentMessages[_this.sentMessageIndex];
                    }
                }
            }
            // Handle down-arrow (40)
            if (e.keyCode === 40) {
                e.preventDefault();
                if (_this.state.atUsers.length > 0) {
                    // If list of @users is displayed, arrow keys should navigate that list
                    var newIndex = _this.state.atUsersIndex + 1 > _this.state.atUsers.length - 1 ? 0 : _this.state.atUsersIndex + 1;
                    _this.setState({ atUsers: _this.state.atUsers, atUsersIndex: newIndex });
                } else {
                    // No lists are visible, arrow keys should navigate sent message history
                    if (_this.sentMessageIndex !== null) {
                        _this.sentMessageIndex = _this.sentMessageIndex + 1 > _this.sentMessages.length - 1 ? null : _this.sentMessageIndex + 1;
                    }
                    textArea.value = _this.sentMessageIndex ? _this.sentMessages[_this.sentMessageIndex] : '';
                }
            }
            // Send message on enter key (13 = enter)
            if (e.keyCode === 13) {
                if (e.shiftKey) {
                    // Shift+ENTER = insert ENTER into text, and expand text area
                    _this.expand(e.target);
                } else if (!e.ctrlKey && !e.altKey) {
                    // just ENTER
                    e.preventDefault();
                    if (_this.state.atUsers.length > 0) {
                        // complete @name expansion
                        _this.selectAtUser(_this.state.atUsers[_this.state.atUsersIndex]);
                    } else {
                        // Send message on enter key (13)
                        _this.send();
                        _this.collapse();
                        _this.getInputNode().blur();
                    }
                }
            }
        };
        _this.keyUp = function (e) {
            var textArea = e.target;
            // if user deletes all the content, shrink the input area again
            var value = textArea.value;
            if (value.length === 0) {
                _this.collapse();
            }
            // if the user types a line that wraps and causes the text area to
            // scroll and we are not currently expanded, then expand.
            if (textArea.scrollHeight > textArea.offsetHeight && !_this.state.expanded) {
                _this.expand(textArea);
            }
        };
        _this.parseInput = function (e) {
            var textArea = e.target;
            // Handle @name completion
            var lastWord = textArea.value.match(/(?:^|\s)@([\S]*)$/);
            var userList = [];
            var userFilter = lastWord && lastWord[1] ? lastWord[1] : '';
            if (lastWord) {
                var chat = ChatState_1.chatState.get('chat');
                chat.getRoom(chat.currentRoom).users.forEach(function (u) {
                    if (userFilter.length === 0 || u.info.name.toLowerCase().indexOf(userFilter.toLowerCase()) !== -1) {
                        userList.push(u.info.name);
                    }
                });
                userList.sort();
            }
            _this.setState({ atUsers: userList, atUsersIndex: _this.state.atUsersIndex });
        };
        _this.expand = function (input) {
            if (!_this.state.expanded) {
                var was_1 = input.offsetHeight;
                _this.setState({ expanded: true });
                setTimeout(function () {
                    // pass height of growth of input area as extra consideration for scroll logic
                    _this.props.scroll(input.offsetHeight - was_1);
                }, 100); // queue it?
            }
        };
        _this.collapse = function () {
            _this.setState({ expanded: false });
        };
        _this.send = function () {
            var input = _this.getInputNode();
            var value = input.value;
            // remove leading space (not newline) and trailing white space
            while (value[0] === ' ') {
                value = value.substr(1);
            }while (value[value.length - 1] === '\n') {
                value = value.substr(0, value.length - 1);
            }if (value[0] !== '/' || !_this.props.slashCommand(value.substr(1))) {
                // not a recognised / command, send it
                _this.props.send(value);
            }
            // add message to temporary history
            _this.sentMessageIndex = null;
            if (value) {
                _this.sentMessages.push(value);
                if (_this.sentMessages.length > 25) _this.sentMessages.shift();
            }
            // reset input field after sending message
            input.value = '';
            input.focus();
        };
        _this.privateMessage = function (name) {
            var input = _this.getInputNode();
            input.value = '/w ' + name + ' ';
            input.focus();
        };
        _this.state = _this.initialState();
        _this._privateMessageHandler = __1.events.on('cse-chat-private-message', function (name) {
            _this.privateMessage(name);
        });
        return _this;
    }
    ChatInput.prototype.initialState = function () {
        return {
            atUsers: [],
            atUsersIndex: 0,
            expanded: false
        };
    };
    ChatInput.prototype.componentDidMount = function () {
        var _this = this;
        if (__1.client.OnBeginChat) {
            __1.client.OnBeginChat(function (cmdKind, text) {
                _this.getInputNode().focus();
                _this.getInputNode().value = text;
            });
        }
    };
    ChatInput.prototype.componentWillUnmount = function () {
        if (this._privateMessageHandler) {
            __1.events.off(this._privateMessageHandler);
        }
    };
    ChatInput.prototype.render = function () {
        var inputClass = ['chat-input', 'input-field', 'chat-' + (this.state.expanded ? 'expanded' : 'normal')];
        return React.createElement("div", { className: inputClass.join(' ') }, React.createElement(AtUserList_1.default, { users: this.state.atUsers, selectedIndex: this.state.atUsersIndex, selectUser: this.selectAtUser }), React.createElement("textarea", { className: 'materialize-textarea', id: 'chat-text', ref: 'new-text', placeholder: 'Say something!', onBlur: function onBlur() {
                return __1.client.ReleaseInputOwnership();
            }, onClick: function onClick() {
                return __1.client.RequestInputOwnership();
            }, onKeyDown: this.keyDown, onKeyUp: this.keyUp, onChange: this.parseInput }));
    };
    return ChatInput;
}(React.Component);
exports.default = ChatInput;