(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = require("./sentences");
    function SentencesIs(valid, value = [], expectation = { invalid: ['is not'], valid: ['is'] }, type = []) {
        return new sentences_1.default(valid, value, expectation, type);
    }
    exports.default = SentencesIs;
});
//# sourceMappingURL=sentences-is.js.map