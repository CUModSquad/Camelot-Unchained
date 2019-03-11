/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import { styled } from '@csegames/linaria/react';
import { includes } from 'lodash';

import { SLOT_DIMENSIONS, GearSlots } from 'fullscreen/lib/constants';
import eventNames, { UnequipItemPayload } from 'fullscreen/lib/itemEvents';
import { getEquippedDataTransfer } from 'fullscreen/lib/utils';
import { Alignment } from './PopupMiniInventory';
import DraggableEquippedItem from './DraggableEquippedItem';
import ItemTooltipContent, { defaultTooltipStyle } from 'shared/ItemTooltip';
import { showTooltip, hideTooltip } from 'actions/tooltips';
import {
  EquippedItem,
} from 'gql/interfaces';

export interface EquippedItemSlotStyle {
  equippedItemSlot: React.CSSProperties;
  itemIcon: React.CSSProperties;
  popupMiniInventoryVisible: React.CSSProperties;
  itemContainer: React.CSSProperties;
  highlightSlotContainer: React.CSSProperties;
}

const SlotDecorationPrefix = `
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${SLOT_DIMENSIONS.WIDTH}px;
  height: ${SLOT_DIMENSIONS.HEIGHT}px;
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  width: ${SLOT_DIMENSIONS.WIDTH}px;
  height: ${SLOT_DIMENSIONS.HEIGHT}px;
  cursor: pointer;
  #drag-and-drop-item-container {
    position: relative;
    width: ${SLOT_DIMENSIONS.WIDTH - 11}px;
    height: ${SLOT_DIMENSIONS.HEIGHT - 11}px;
    right: -5px;
    bottom: -5px;
  }
  &:before {
    ${SlotDecorationPrefix}
    width: ${SLOT_DIMENSIONS.WIDTH - 4}px;
    height: ${SLOT_DIMENSIONS.HEIGHT - 4}px;
    background: url(../images/paperdoll/slot-gear-bg.png) no-repeat;
    background-size: contain;
  }
  &:after {
    ${SlotDecorationPrefix}
    background: url(../images/paperdoll/slot-gear-frame.png) no-repeat;
    background-size: contain;
  }
  &.weapon-slot {
    &:before {
      ${SlotDecorationPrefix}
      width: ${SLOT_DIMENSIONS.WIDTH - 4}px;
      height: ${SLOT_DIMENSIONS.HEIGHT - 4}px;
      top: 1px;
      left: 1px;
      background: url(../images/paperdoll/slot-weapon-bg.png) no-repeat;
      background-size: contain;
    }
    &:after {
      ${SlotDecorationPrefix}
      background: url(../images/paperdoll/slot-weapon-frame.png) no-repeat;
      background-size: contain;
    }
  }
`;

export interface EquippedItemSlotProps {
  providedEquippedItem: EquippedItem.Fragment;
  slot: { slotName: GearSlots, openingSide: Alignment };
  selectedSlot: { slotName: GearSlots, openingSide: Alignment };
  disableDrag: boolean;
  setSlotInfo: (ref: HTMLDivElement, slot: { slotName: GearSlots, openingSide: Alignment }) => void;

}

export interface EquippedItemSlotState {
  isMouseOver: boolean;
  showTooltip: boolean;
  itemIsOverBGColor: string;
}

export class EquippedItemSlot extends React.PureComponent<EquippedItemSlotProps, EquippedItemSlotState> {
  private ref: HTMLDivElement;
  constructor(props: EquippedItemSlotProps) {
    super(props);
    this.state = {
      isMouseOver: false,
      showTooltip: false,
      itemIsOverBGColor: null,
    };
  }

  public render() {
    const isWeapon = includes(this.props.slot.slotName.toLowerCase(), 'weapon');
    return (
      <Container
        ref={(r: HTMLDivElement) => this.ref = r}
        className={isWeapon ? 'weapon-slot' : ''}
        onClick={this.onClick}
        onMouseOver={this.onMouseOverItemSlot}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.unequipItem}>
          <DraggableEquippedItem
            disableDrag={this.props.disableDrag}
            slotName={this.props.slot.slotName}
            equippedItem={this.props.providedEquippedItem}
            itemMenuVisible={this.isItemMenuVisible()}
          />
      </Container>
    );
  }

  private onClick = (e: React.MouseEvent) => {
    if (e.type === 'click') {
      this.props.setSlotInfo(this.ref, this.props.slot);
    }
  }

  private unequipItem = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 2) return;
    // Fires off onUnequipItem event
    if (!this.props.providedEquippedItem) return;

    const equippedItem = this.props.providedEquippedItem;
    const equippedItemDataTransfer = getEquippedDataTransfer({
      item: equippedItem.item,
      position: 0,
      location: 'equipped',
      gearSlots: equippedItem.gearSlots,
    });
    const payload: UnequipItemPayload = {
      item: equippedItemDataTransfer,
    };
    hideTooltip();
    game.trigger(eventNames.onUnequipItem, payload);
  }

  private onMouseOverItemSlot = (event: React.MouseEvent<HTMLDivElement>) => {
    const equippedItem = this.props.providedEquippedItem;
    const itemId = equippedItem && equippedItem.item.id;
    const shouldShowTooltip = !this.isItemMenuVisible() && itemId;
    if (shouldShowTooltip) {
      const content = <ItemTooltipContent
        item={this.props.providedEquippedItem.item}
        instructions='Right click to unequip'
      />;
      showTooltip({ content, event, styles: defaultTooltipStyle, shouldAnimate: true });
    }
  }

  private onMouseLeave = () => {
    this.setState({ isMouseOver: false, showTooltip: false });
    hideTooltip();
  }

  private isItemMenuVisible = () => {
    if (this.props.selectedSlot && this.props.selectedSlot.slotName === this.props.slot.slotName) {
      return true;
    }

    return false;
  }

}

export default EquippedItemSlot;