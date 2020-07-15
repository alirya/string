(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = require("../../boolean/string/digit");
    function Digit(object) {
        return digit_1.default(object.valid, object.value);
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map