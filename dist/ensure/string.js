var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/string", "../assert/throwable/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = __importDefault(require("../assert/string"));
    const string_2 = __importDefault(require("../assert/throwable/string"));
    function String(value, error = string_2.default) {
        string_1.default(value, error);
        return value;
    }
    exports.default = String;
});
//# sourceMappingURL=string.js.map