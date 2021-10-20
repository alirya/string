import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
import Sentences from "./sentences";

/**
 * @deprecated
 * string implementation of {@see Sentences}
 */
export default class Sentence implements ValueOf<string>, Validatable {

    /**
     * @see Sentences
     */
    constructor(
        public valid : boolean,
        public subject : string = '',
        public expect : string = '',
        public actual : string = '',
        public accept : string = 'is',
        public reject : string = 'must',
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

        return new Sentences(
            this.valid,
            [this.subject],
            [this.expect],
            [this.accept],
            [this.reject],
            [this.actual],
            this.accepts,
            this.rejects,
            this.comma
        ).message;
    }

}
