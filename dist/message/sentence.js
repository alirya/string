import Sentences from "./sentences";
/**
 * @deprecated
 * string implementation of {@see Sentences}
 */
export default class Sentence {
    /**
     * @see Sentences
     */
    constructor(valid, subject = '', expect = '', actual = '', accept = 'is', reject = 'must', accepts = ['subject', 'reject', 'accept', 'expect'], rejects = ['subject', 'reject', 'accept', 'expect', 'actual'], comma = []) {
        this.valid = valid;
        this.subject = subject;
        this.expect = expect;
        this.actual = actual;
        this.accept = accept;
        this.reject = reject;
        this.accepts = accepts;
        this.rejects = rejects;
        this.comma = comma;
    }
    valueOf() {
        return this.message;
    }
    toString() {
        return this.message;
    }
    get message() {
        return new Sentences(this.valid, [this.subject], [this.expect], [this.accept], [this.reject], [this.actual], this.accepts, this.rejects, this.comma).message;
    }
}
//# sourceMappingURL=sentence.js.map