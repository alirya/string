import ValueOf from "@dikac/t-value/value-of/value-of";
import NotEmpty from "../boolean/not-empty";
import Validatable from "@dikac/t-validatable/validatable";
import Trim from "../trim";
import SuffixCharacter from "../suffix-character";
import RemoveSuffixCharacter from "../remove-suffix-character";

/**
 * @deprecated
 * create a string message, by joining subject, (reject, or accept), expect, actual according
 * to order
 */
export default class Sentences implements ValueOf<string>, Validatable {

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
    constructor(
        public valid : boolean,
        public subject : string[] = [],
        public expect : string[] = [],
        public accept : string[] = [],
        public reject : string[] = [],
        public actual : string[] = [],
        public accepts : ('subject'|'expect'|'reject'|'accept'|'actual')[] = ['subject','reject','accept','expect'],
        public rejects : ('subject'|'expect'|'reject'|'accept'|'actual')[] = ['subject','reject','accept','expect','actual'],
        public comma : ('subject'|'expect'|'reject'|'accept'|'actual')[] = []
    ) {
    }

    valueOf(): string {

        return this.message;
    }

    toString() : string {

        return this.message;
    }

    get message() : string {

        const orders = this.valid ? this.accepts : this.rejects;

        let messages : string[] = [];

        for (let order of orders) {

            if(this.valid && order === 'reject') {

                continue;
            }

            if(!this.valid && order === 'accept') {

                continue;
            }

            let part = this[order].map((message)=>Trim(message)).filter(NotEmpty).join(' ');

            if(this.comma.includes(order)) {

                part = SuffixCharacter(part, ',');
            }

            messages.push(part);
        }

        messages = messages.map((message)=>Trim(message)).filter(NotEmpty);

        let message = messages.join(' ');

        return SuffixCharacter(RemoveSuffixCharacter(message, ','), '.');
    }

}
