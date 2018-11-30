"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("../../../");
var emojis;
(function (emojis) {
    emojis[emojis["ANGRY"] = 0] = "ANGRY";
    emojis[emojis["BAFFLED"] = 1] = "BAFFLED";
    emojis[emojis["CONFUSED"] = 2] = "CONFUSED";
    emojis[emojis["COOL"] = 3] = "COOL";
    emojis[emojis["CRYING"] = 4] = "CRYING";
    emojis[emojis["EVIL"] = 5] = "EVIL";
    emojis[emojis["FRUSTRATED"] = 6] = "FRUSTRATED";
    emojis[emojis["GRIN"] = 7] = "GRIN";
    emojis[emojis["HAPPY"] = 8] = "HAPPY";
    emojis[emojis["HIPSTER"] = 9] = "HIPSTER";
    emojis[emojis["NEUTRAL"] = 10] = "NEUTRAL";
    emojis[emojis["SAD"] = 11] = "SAD";
    emojis[emojis["SHOCKED"] = 12] = "SHOCKED";
    emojis[emojis["SLEEPY"] = 13] = "SLEEPY";
    emojis[emojis["SMILE"] = 14] = "SMILE";
    emojis[emojis["TONGUE"] = 15] = "TONGUE";
    emojis[emojis["WINK"] = 16] = "WINK";
    emojis[emojis["WONDERING"] = 17] = "WONDERING";
    emojis[emojis["ANDREWFEZ"] = 18] = "ANDREWFEZ";
    emojis[emojis["ANDREW"] = 19] = "ANDREW";
    emojis[emojis["JBHEAD"] = 20] = "JBHEAD";
    emojis[emojis["JB"] = 21] = "JB";
    emojis[emojis["MARKHEAD"] = 22] = "MARKHEAD";
    emojis[emojis["MJHEAD"] = 23] = "MJHEAD";
    emojis[emojis["MJ"] = 24] = "MJ";
    emojis[emojis["MJELF"] = 25] = "MJELF";
    emojis[emojis["SANDRAGRIN"] = 26] = "SANDRAGRIN";
    emojis[emojis["TIMHEAD"] = 27] = "TIMHEAD";
    emojis[emojis["TINYMICHELLE"] = 28] = "TINYMICHELLE";
    emojis[emojis["BATGRIN"] = 29] = "BATGRIN";
    emojis[emojis["BATHAPPY"] = 30] = "BATHAPPY";
    emojis[emojis["BATMAD"] = 31] = "BATMAD";
    emojis[emojis["BATSAD"] = 32] = "BATSAD";
    emojis[emojis["BATTONGUE"] = 33] = "BATTONGUE";
    emojis[emojis["BOB"] = 34] = "BOB";
    emojis[emojis["BOBLOVE"] = 35] = "BOBLOVE";
    emojis[emojis["CROWN"] = 36] = "CROWN";
    emojis[emojis["CUPOTEARS"] = 37] = "CUPOTEARS";
    emojis[emojis["QQCUP"] = 38] = "QQCUP";
    emojis[emojis["DRAGONLICK"] = 39] = "DRAGONLICK";
    emojis[emojis["DRAGONWHALE"] = 40] = "DRAGONWHALE";
    emojis[emojis["DUCK"] = 41] = "DUCK";
    emojis[emojis["DUCKMAGE"] = 42] = "DUCKMAGE";
    emojis[emojis["FROWNSTRM"] = 43] = "FROWNSTRM";
    emojis[emojis["SADSTRM"] = 44] = "SADSTRM";
    emojis[emojis["HAPPYSTRM"] = 45] = "HAPPYSTRM";
    emojis[emojis["JUDGINGDUCKONE"] = 46] = "JUDGINGDUCKONE";
    emojis[emojis["JUDGINGDUCK1"] = 47] = "JUDGINGDUCK1";
    emojis[emojis["JUDGINGDUCKTWO"] = 48] = "JUDGINGDUCKTWO";
    emojis[emojis["JUDGINGDUCK2"] = 49] = "JUDGINGDUCK2";
    emojis[emojis["ARTHURIANLOVE"] = 50] = "ARTHURIANLOVE";
    emojis[emojis["ARTLOVE"] = 51] = "ARTLOVE";
    emojis[emojis["TUATHALOVE"] = 52] = "TUATHALOVE";
    emojis[emojis["TDDLOVE"] = 53] = "TDDLOVE";
    emojis[emojis["VIKINGLOVE"] = 54] = "VIKINGLOVE";
    emojis[emojis["VIKLOVE"] = 55] = "VIKLOVE";
    emojis[emojis["PLUSTEN"] = 56] = "PLUSTEN";
    emojis[emojis["PLUS10"] = 57] = "PLUS10";
    emojis[emojis["PVP"] = 58] = "PVP";
    emojis[emojis["RAGE"] = 59] = "RAGE";
    emojis[emojis["SALT"] = 60] = "SALT";
    emojis[emojis["ARTHURIANSHIELD"] = 61] = "ARTHURIANSHIELD";
    emojis[emojis["ARTSHIELD"] = 62] = "ARTSHIELD";
    emojis[emojis["TUATHASHIELD"] = 63] = "TUATHASHIELD";
    emojis[emojis["TDDSHIELD"] = 64] = "TDDSHIELD";
    emojis[emojis["VIKINGSHIELD"] = 65] = "VIKINGSHIELD";
    emojis[emojis["VIKSHIELD"] = 66] = "VIKSHIELD";
    emojis[emojis["SHOTSFIRED"] = 67] = "SHOTSFIRED";
    emojis[emojis["UNICORN"] = 68] = "UNICORN";
})(emojis || (emojis = {}));
var emojiNames = Object.keys(emojis).map(function (k) {
    return emojis[k];
}).filter(function (v) {
    return typeof v === 'string';
});
function emojiNameFromText(text) {
    // parse symbol emoji -- like :D
    switch (text) {
        case ':D':
        case ':-D':
            return 'GRIN';
        case '-_-zzZ':
        case '(-_-)zzZ':
        case ':zzz:':
            return 'SLEEPY';
        case '8-o':
        case ':o':
        case '8o':
            return 'SHOCKED';
        case '8)':
        case '8-)':
            return 'COOL';
        case ':\'(':
        case ':qq:':
            return 'CRYING';
        case ':)':
        case ':-)':
            return 'HAPPY';
        case ':|':
        case ':-|':
            return 'NEUTRAL';
        case ':(':
        case ':-(':
            return 'SAD';
        case ':p':
        case ':-p':
        case ';p':
        case ';-p':
        case '8p':
        case '8-p':
        case ':P':
        case ':-P':
        case ';P':
        case ';-P':
        case '8P':
        case '8-P':
            return 'TONGUE';
        case ':>':
            return 'SMILE';
        case 'o.o':
            return 'BAFFLED';
        case '3:)':
            return 'EVIL';
        case ';)':
        case ';-)':
            return 'WINK';
    }
    var upper = text.replace(/:/g, '').toUpperCase();
    return __1.utils.findIndexWhere(emojiNames, function (n) {
        return n === upper;
    }) ? upper : null;
}
function fromText(text, keygen) {
    var emoji = emojiNameFromText(text);
    if (emoji) {
        return [React.createElement("span", { key: keygen(), className: 'emoji emoji--' + emoji })];
    }
}
function createRegExp() {
    return (/:[a-zA-Z0-9]+:|[3]*[;:8][-']*[()@oO#$*pPD/|><]|\([6aAhH]\)|-_-zzZ|\(-_-\)zzZ|[oO]\.[oO]/g
    );
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};