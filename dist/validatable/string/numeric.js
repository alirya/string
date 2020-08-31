(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/numeric"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const numeric_1 = require("../../assert/string/numeric");
    function Numeric(object) {
        return numeric_1.default(object.valid, object.value);
    }
    exports.default = Numeric;
});
//# sourceMappingURL=numeric.js.map