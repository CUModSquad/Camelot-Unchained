/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import { BodyParts } from 'lib/PlayerStatus';
import { PlayerState } from 'components/HealthBar';

export function getHealthPercent(playerState: PlayerState, bodyPart: BodyParts) {
  if (!playerState || !playerState.health || !playerState.health[bodyPart]) {
    return 0;
  }

  const bodyPartHealth = playerState.health[bodyPart];
  return (bodyPartHealth.current / bodyPartHealth.max) * 100;
}

export function getWoundsForBodyPart(playerState: PlayerState, bodyPart: BodyParts) {
  if (!playerState || !playerState.health || !playerState.health[bodyPart]) {
    return 0;
  }

  return playerState.health[bodyPart].wounds;
}

export function getBloodPercent(playerState: PlayerState) {
  if (!playerState || !playerState.blood) {
    return 0;
  }

  return (playerState.blood.current / playerState.blood.max) * 100;
}

export function getStaminaPercent(playerState: PlayerState) {
  if (!playerState || !playerState.stamina) {
    return 0;
  }

  return (playerState.stamina.current / playerState.stamina.max) * 100;
}

export function getFaction(playerState: PlayerState) {
  if (!playerState || !playerState.faction) {
    return Faction.Factionless;
  }

  return playerState.faction;
}

export function getBodyPartsCurrentHealth(playerState: PlayerState) {
  return playerState.health.map(bodypart => bodypart.current);
}
