var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/digit"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const digit_1 = __importDefault(require("../boolean/digit"));
    class Digit {
        constructor(value, message) {
            this.value = value;
            this.messageFactory = message;
            this.valid = digit_1.default(value);
        }
        toString() {
            return this.value;
        }
        get message() {
            return this.messageFactory(this);
        }
        valueOf() {
            return this.value;
        }
    }
    exports.default = Digit;
});
//# sourceMappingURL=digit.js.map