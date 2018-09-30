/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { utils } from '@csegames/camelot-unchained';

import BuildingEventTopics from './BuildingEventTopics';

function run(emitter: utils.EventEmitter, topic: string) {
  // TODO COHERENT OnBlueprintSelected missing
  // client.OnBlueprintSelected(function() {
  //   // todo: how can i tell which blueprint was selected? There are no parameters. Also, it never seems to be called
  //   console.log('OnBlueprintSelected: ' + JSON.stringify([].slice.call(arguments)));
  // });
}

export default class BlueprintSelectListener {
  public listening: boolean = false;
  public type: string;
  public topic: string = BuildingEventTopics.handlesBlueprintSelect;

  public start(emitter: utils.EventEmitter): void {
    if (!this.listening) {
      this.listening = true;
      run(emitter, this.topic);
    }
  }
}
