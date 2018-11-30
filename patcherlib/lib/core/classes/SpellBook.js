"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpellBook = /** @class */function () {
    function SpellBook(spellbook) {
        if (spellbook === void 0) {
            spellbook = {};
        }
        spellbook.abilities = spellbook.abilities || [];
    }
    SpellBook.create = function () {
        var a = new SpellBook();
        return a;
    };
    return SpellBook;
}();
exports.default = SpellBook;