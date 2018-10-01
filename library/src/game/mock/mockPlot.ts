
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/// <reference> ../coherent.d.ts
import { PlotState_Update, Plot } from '../GameClientModels/Plot';

export function mockPlot() {
  const _plotState: Partial<Plot> = {
    ...game.plot as Plot,
  };
  console.log('Running mock plot');
  engine.trigger(PlotState_Update, _plotState);
  _devGame.plot.buildingMode = window.BuildingMode.PlacingPhantom;
  engine.trigger(PlotState_Update, game.plot);
}
