(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/readonly-merge", "@dikac/t-validatable/message/callback", "../boolean/match-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validatable/message/readonly-merge");
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const match_from_object_1 = require("../boolean/match-from-object");
    class Match extends readonly_merge_1.default {
        constructor(number, match, message) {
            let container = {
                pattern: match,
                value: number,
            };
            let msg = callback_1.default(container, match_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.pattern = match;
        }
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map