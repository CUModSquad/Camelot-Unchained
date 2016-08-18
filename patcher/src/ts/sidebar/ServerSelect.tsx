/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import {connect} from 'react-redux';
import {Channel, ChannelStatus, patcher} from '../api/patcherAPI';
import {Server, AccessType, ServerPopulation} from '../redux/modules/servers';
import * as events from '../../lib/events';

import {changeChannel, requestChannels, ChannelState} from '../redux/modules/channels';
import {fetchServers, changeServer, ServersState} from '../redux/modules/servers';
import {fetchCharacters, selectCharacter, CharactersState} from '../redux/modules/characters';

import Animate from '../../lib/Animate';

export enum ServerStatus {
  OFFLINE,
  ONLINE,
  STARTING
}

function select(state: any): any {
  return {
    channelsState: state.channels,
    serversState: state.servers,
    charactersState: state.characters
  }
}

export interface SelectServerProps {
  dispatch?: (action: any) => void;
  channelsState?: ChannelState;  
  serversState?: ServersState;
  charactersState?: CharactersState;
}

export interface SelectServerState {
  showList: boolean;
}

class SelectServer extends React.Component<SelectServerProps, SelectServerState> {

  private mergedServerList: {[key:string]: any } = {};
  
  private listAsArray: any[] = null;
  
  constructor(props: SelectServerProps) {
    super(props);

    this.state = {
      showList: false,
    };
  }

  renderList() {
    return (
      <div className='ServerList_container card-panel no-padding'>
        {this.listAsArray.map((i: any) => this.renderItem(i, true))}
      </div>
    )
  }

  trySelectCharacter = (shardID:number) => {
    if(!this.props.charactersState || !this.props.charactersState.characters || 0 == this.props.charactersState.characters.length) return;

    let filteredCharacters = this.props.charactersState.characters.filter( c => c.shardID == shardID);
    if(filteredCharacters && filteredCharacters.length > 0) this.props.dispatch(selectCharacter(filteredCharacters[0]));
  }

  onSelectedServerChanged = (server: any) => {
    const {dispatch} = this.props;

    events.fire('play-sound', 'select');

    //is there a required order here?
    dispatch(changeChannel(server.channelInfo));
    dispatch(changeServer(server.serverInfo));
    if(server && server.shardID) this.trySelectCharacter(server.shardID);
    else dispatch(selectCharacter(null));
    this.setState({
      showList: false
    } as any);
  }

  getTotalPopulation = (server:Server):ServerPopulation => {
    if (!server || !server.channelID || !this.props.serversState || !this.props.serversState.serverPopulations) return { serverName: '', arthurians: 0, vikings: 0, tuathaDeDanann: 0};; 
    
    const serverPop = this.props.serversState.serverPopulations[server.name];
    if (serverPop) return serverPop;
    
    return { serverName: '', arthurians: 0, vikings: 0, tuathaDeDanann: 0};; 
  } 

  renderItem(item: any, hideSelected:boolean) {
    if (item.serverInfo && !(hideSelected && this.props.serversState.currentServer && this.props.serversState.currentServer.name == item.serverInfo.name)) {
      const totalPlayers = this.getTotalPopulation(this.props.serversState.currentServer); //BUG: displaying the current server pop for every server in the list
      const status = item.serverInfo.playerMaximum > 0 ? 'online' : 'offline';
      const accessLevel = AccessType[item.serverInfo.accessLevel];

      return (
        <div className='server-select' onClick={() => this.onSelectedServerChanged(item)}>
          <div className='server-details'>
            <h5 className='server'>{item.displayName} ({accessLevel})</h5>
            <h6 className='server-players'>Players Online: {totalPlayers.arthurians + totalPlayers.tuathaDeDanann + totalPlayers.vikings}/{item.serverInfo.playerMaximum}</h6>
          </div>
          <div className='server-status'><div className={'indicator ' + status} data-position='right'
            data-delay='150' data-tooltip={status} /></div>
        </div>
      );
    } else if(!(hideSelected && this.props.channelsState.selectedChannel && this.props.channelsState.selectedChannel.channelName == item.channelInfo.channelName)) {
      return (
        <div className='server-select' onClick={() => this.onSelectedServerChanged(item)}>
          <div className='server-details'>
            <h5 className='server'>{item.channelInfo.channelName}</h5>
          </div>
        </div>
      );
    }    
  }

  //TODO: take care of this at the store level
  mergeServerChannelLists(servers:Array<Server>, channels:Array<Channel>) : any {

    let filteredServers:Array<Server> = servers.filter((s) => { return s.name != 'localhost'; });

    filteredServers.forEach(s => {
      this.mergedServerList[s.name] = this.mergedServerList[s.name] || { displayName: s.name, serverInfo: null, channelInfo:null };
      this.mergedServerList[s.name].serverInfo = s;
      this.mergedServerList[s.name].displayName = s.name;
    });

    channels.forEach(c => {
      let channelFound = false;
      for (var key in this.mergedServerList) {
          let channelId =  -1
          
          if (this.mergedServerList[key].serverInfo && this.mergedServerList[key].serverInfo.channelID) channelId = this.mergedServerList[key].serverInfo.channelID;
          else if (this.mergedServerList[key].channelInfo && this.mergedServerList[key].channelInfo.channelID) channelId = this.mergedServerList[key].channelInfo.channelID;
          
          if (channelId === c.channelID) {
            channelFound = true;
            this.mergedServerList[key].channelInfo = c;
          }
      }

      if(!channelFound) {
        this.mergedServerList[c.channelName] = this.mergedServerList[c.channelName] || { displayName: c.channelName, serverInfo: null, channelInfo:null };
        this.mergedServerList[c.channelName].channelInfo = c;
        this.mergedServerList[c.channelName].displayName = c.channelName;
      }
    });

    let dictToArray:any[] = [];
    Object.keys(this.mergedServerList).forEach(key => { dictToArray.push(this.mergedServerList[key]) });
    return dictToArray;
  }

  getSelectedIndex = () : number => {
    const {currentServer} = this.props.serversState;
    const {selectedChannel} = this.props.channelsState;
    if (!currentServer && !selectedChannel) return 0;

    return this.listAsArray.indexOf(this.listAsArray.find((i: any) => {
      if (i.serverInfo && currentServer) return i.serverInfo.name == currentServer.name;
      else if (i.channelInfo && selectedChannel) return i.channelInfo.channelName == selectedChannel.channelName;
      return false;
    }));
  }
  
  render() {
    const {servers} = this.props.serversState;
    const {channels} = this.props.channelsState;

    if (!servers && !channels) return null;

    //hack, sort out selected characters/servers/channels here until the underlying store gets sorted out
    if(!this.props.charactersState.selectedCharacter && this.props.serversState.currentServer) {
      this.trySelectCharacter(this.props.serversState.currentServer.shardID);
    }

    this.listAsArray = this.mergeServerChannelLists(servers, channels);

    let list: any = null;
    if (this.state.showList) list = this.renderList();

    return (
      <div className='server-selected'> 
        <div onClick={() => this.setState({showList: !this.state.showList} as any)}>
          <h5 className='label'>SELECT SERVER</h5>
          {this.renderItem(this.listAsArray[this.getSelectedIndex()], false)}
        </div>
        <Animate animationEnter='fadeIn' animationLeave='fadeOut' durationEnter={500} durationLeave={500}>
          {list}
        </Animate>
      </div>
    )
  }
}

export default connect(select)(SelectServer);
