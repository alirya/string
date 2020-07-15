(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/readonly-merge", "@dikac/t-validatable/message/callback", "../boolean/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validatable/message/readonly-merge");
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const numeric_1 = require("../boolean/numeric");
    class Numeric extends readonly_merge_1.default {
        constructor(string, message) {
            let msg = callback_1.default(string, numeric_1.default, () => message(this));
            super({ value: string }, msg, msg);
        }
        toString() {
            return this.value;
        }
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map