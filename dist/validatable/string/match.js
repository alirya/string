(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/match"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = require("../../boolean/string/match");
    function Match(object) {
        return match_1.default(object.valid, object.value, object.pattern);
    }
    exports.default = Match;
});
//# sourceMappingURL=match.js.map