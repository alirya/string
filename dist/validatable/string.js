(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/callback-function", "../boolean/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_function_1 = require("@dikac/t-validator/validatable/callback-function");
    const string_1 = require("../boolean/string");
    function String(value, message) {
        return callback_function_1.default(value, string_1.default, message);
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map