import NotEmpty from "../boolean/not-empty";
import Trim from "../trim";
import SuffixCharacter from "../suffix";
import RemoveSuffixCharacter from "../remove-suffix";
/**
 * @deprecated
 * create a string message, by joining subject, (reject, or accept), expect, actual according
 * to order
 */
export default class Sentences {
    /**
     * @param valid
     * @param subject
     * intended for such as 'argument', 'type', 'object.property'
     *
     * @param reject
     * @default 'must'
     * used {@param subject} if {@param valid} false
     * intended for such as 'must', 'is not'
     *
     * @param accept
     * @default 'is'
     * used {@param subject} if {@param valid} true
     * intended for such as 'must', 'is not'
     *
     * @param expect
     * expectation of value
     * intended for such as 'array', 'string' ,'lower than', <literal value>
     *
     * @param actual
     * actual of message
     * intended for such as 'array', 'string' ,'lower than', <literal value>
     *
     * @param rejects
     * orders for invalid
     * @default ['subject', 'reject', 'accept', 'expect', 'actual']
     *
     * @param accepts
     * orders for valid
     * @default ['subject', 'reject', 'accept', 'expect']
     *
     * @param comma
     * place comma after parts
     */
    constructor(valid, subject = [], expect = [], accept = [], reject = [], actual = [], accepts = ['subject', 'reject', 'accept', 'expect'], rejects = ['subject', 'reject', 'accept', 'expect', 'actual'], comma = []) {
        this.valid = valid;
        this.subject = subject;
        this.expect = expect;
        this.accept = accept;
        this.reject = reject;
        this.actual = actual;
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
        const orders = this.valid ? this.accepts : this.rejects;
        let messages = [];
        for (let order of orders) {
            if (this.valid && order === 'reject') {
                continue;
            }
            if (!this.valid && order === 'accept') {
                continue;
            }
            let part = this[order].map((message) => Trim(message)).filter(NotEmpty).join(' ');
            if (this.comma.includes(order)) {
                part = SuffixCharacter(part, ',');
            }
            messages.push(part);
        }
        messages = messages.map((message) => Trim(message)).filter(NotEmpty);
        let message = messages.join(' ');
        return SuffixCharacter(RemoveSuffixCharacter(message, ','), '.');
    }
}
//# sourceMappingURL=sentences.js.map