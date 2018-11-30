"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var BuildingBlueprint_1 = require("./classes/BuildingBlueprint");
var client_1 = require("../core/client");
var events = require("../events");
var restApi = require("../restapi");
var blueprintsLoaded = false;
var blueprintsRequested = false;
var blueprintsList = [];
function loadBlueprints() {
    client_1.default.OnNewBlueprint(function (index, name) {
        var current = new Date().getTime();
        // special case, this is not a real blueprint
        if (name === 'Small Control Island') {
            return;
        }
        var blueprint = new BuildingBlueprint_1.default({
            index: index,
            name: name
        });
        blueprintsList.push(blueprint);
        if (blueprintsLoaded) {
            events.fire(events.buildingEventTopics.handlesBlueprints, { blueprints: blueprintsList });
        }
    });
    client_1.default.RequestBlueprints();
}
function requestBlueprintCopy() {
    client_1.default.CopyBlueprint();
}
exports.requestBlueprintCopy = requestBlueprintCopy;
function requestBlueprintPaste() {
    client_1.default.PasteBlueprint();
}
exports.requestBlueprintPaste = requestBlueprintPaste;
function fireHandleBlueprints() {
    events.fire(events.buildingEventTopics.handlesBlueprints, { blueprints: blueprintsList });
}
function requestBlueprintDelete(blueprint) {
    // no feedback on this delete, we just call it and cross our fingers
    client_1.default.DeleteLocalBlueprint(blueprint.name);
    // there is no client.OnDeleteBlueprint
    // so we will just remove the blueprint and hope the delete really worked
    for (var index = 0; index <= blueprintsList.length; index++) {
        var bp = blueprintsList[index];
        if (bp.name === blueprint.name) {
            blueprintsList.splice(index, 1);
            fireHandleBlueprints();
            return;
        }
    }
}
exports.requestBlueprintDelete = requestBlueprintDelete;
function requestBlueprintSave(name) {
    client_1.default.SaveBlueprint(name);
}
exports.requestBlueprintSave = requestBlueprintSave;
function requestBlueprintSelect(blueprint) {
    client_1.default.SelectBlueprint(blueprint.index);
    events.fire(events.buildingEventTopics.handlesBlueprintSelect, { blueprint: blueprint });
}
exports.requestBlueprintSelect = requestBlueprintSelect;
function requestBlueprintIcon(blueprint) {
    restApi.blueprints.getBlueprintIcon(blueprint.index).then(function (icon) {
        blueprint.icon = icon;
        fireHandleBlueprints();
    }, function () {
        fireHandleBlueprints();
    });
}
exports.requestBlueprintIcon = requestBlueprintIcon;
function requestBlueprints() {
    if (!blueprintsRequested) {
        blueprintsRequested = false;
        loadBlueprints();
    }
    if (blueprintsLoaded) {
        fireHandleBlueprints();
    } else {
        // we are waiting till the blueprintsList has not updated for 2 seconds before declaring that the blueprints are loaded
        // we are only firing off the event periodically to avoid re-rendering the list possibly 100s of times on startup.
        // The blueprints are loaded using the client.OnNewBlueprint() event which fires for every blueprint
        waitForBlueprintsToLoad();
    }
}
exports.requestBlueprints = requestBlueprints;
function waitForBlueprintsToLoad() {
    var lastSize = blueprintsList.length;
    setTimeout(function () {
        if (lastSize === blueprintsList.length) {
            blueprintsLoaded = true;
            fireHandleBlueprints();
        } else {
            waitForBlueprintsToLoad();
        }
    }, 2000);
}