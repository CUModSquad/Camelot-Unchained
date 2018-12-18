/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import './types';
import './typeExtensions';
import './GameDataStore';

import { GameInterface, DevGameInterface } from './GameInterface';
import { Engine } from './coherent';
import initializeGame from './initializeGame';

// Exports Constants + GameInterface + All interfaces defined for client models
export * from './GameInterface';
export * from './coherent';

export * from './GameClientModels';

// Let anyone including this library know that game and __devGame are globally available.
declare global {
  const game: DeepImmutable<GameInterface>;
  const _devGame: DevGameInterface;
  const engine: Engine;
}

export default initializeGame;
