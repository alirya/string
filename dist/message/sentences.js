(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("../boolean/not-empty");
    /**
     * array version, create a string message, by constructing subject, predicate, object
     *
     * combine subject, predicate, object to create whole sentence
     */
    class Sentences {
        /**
         * @param valid
         * @param subject
         * @param predicate
         * @param object
         */
        constructor(valid, subject = [], predicate = { invalid: [], valid: [] }, object = []) {
            this.valid = valid;
            this.subject = subject;
            this.predicate = predicate;
            this.object = object;
        }
        valueOf() {
            return this.message;
        }
        toString() {
            return this.message;
        }
        get message() {
            let messages = [];
            messages.push(...this.subject);
            messages.push(...(this.valid ? this.predicate.valid : this.predicate.invalid));
            messages.push(...this.object);
            messages = messages.filter(not_empty_1.default);
            return messages.join(' ');
        }
    }
    exports.default = Sentences;
});
//# sourceMappingURL=sentences.js.map