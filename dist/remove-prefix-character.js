(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * remove {@param character} at the start of {@param string}
     */
    function RemovePrefixCharacter(string, character) {
        if (string.length !== 0) {
            character = character[0];
            if (string[0] === character) {
                return string.slice(1);
            }
        }
        return string;
    }
    exports.default = RemovePrefixCharacter;
});
//# sourceMappingURL=remove-prefix-character.js.map