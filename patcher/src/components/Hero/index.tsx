/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2016-09-06 17:07:40
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2016-09-06 17:11:38
 */

import * as React from 'react';

import {HeroContentItem} from '../../services/session/heroContent';
import Animate from '../../lib/Animate';

export interface HeroProps {
  isFetching: boolean;
  lastUpdated: Date;
  items: HeroContentItem[];
};

export interface HeroState {
  currentItem: number;
  firstLoad: boolean;
}

class Hero extends React.Component<HeroProps, HeroState> {
  public name:string = 'cse-patcher-hero';
  private timeout: any = null;

  constructor(props: HeroProps) {
    super(props);
    this.state = {currentItem: -1, firstLoad: true};
    setTimeout(() => {
      this.setState({currentItem: 0, firstLoad: false});
      this.timeNext(1);
    }, 10000);
  }

  renderLogo = () => {
    return (
      <div className='cse-patcher-hero-item' key='logoKey1'>
        <div dangerouslySetInnerHTML={{__html: `<style> .logo-reveal-vid {position: fixed;top: 50%;left: 50%;min-width: 100%;min-height: 100%;width: auto;height: auto;transform: translateX(-50%) translateY(-50%);background-size: cover;}</style><video class='logo-reveal-vid' src='./videos/logo-reveal.webm' autoplay></video>`}}></div>
      </div>
    )
  }

  renderHeroItem = (item: HeroContentItem) => {
    return (
      <div className='cse-patcher-hero-item' key={item.id}>
        <div dangerouslySetInnerHTML={{__html: `${item.content}`}}></div>
      </div>
    )
  }

  selectIndex = (index: number) => {
    clearTimeout(this.timeout);
    this.timeout = null;
    this.setState({
      currentItem: index,
      firstLoad: false
    });
    this.timeNext(index++);
  }

  timeNext = (index: number) => {
    let next = this.state.currentItem+1;
    if (next >= this.props.items.length) next = 0;
    this.timeout = setTimeout(() => this.selectIndex(next), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const currentItem = this.state.firstLoad ? this.renderLogo() : this.props.items.length > 0 ? this.renderHeroItem(this.props.items[this.state.currentItem]) : null;
    return (
      <div id={this.name} className='main-content'>
        <Animate animationEnter='fadeIn' animationLeave='fadeOut'
          durationEnter={400} durationLeave={500}>
          {currentItem}
        </Animate>
        // render controls
        <ul className={`hero-controls ${this.props.items.length < 2 ? 'hidden' : ''}`}>
          {this.props.items.map((item, index) => <li key={index} className={`${this.state.currentItem == index ? 'active' : ''}`} onClick={this.selectIndex.bind(this, index)}>{index+1}</li>)}
        </ul>
      </div>
    );
  }
};

export default Hero;
