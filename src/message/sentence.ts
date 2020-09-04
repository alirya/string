import ValueOf from "@dikac/t-value/value-of/value-of";
import NotEmpty from "../boolean/not-empty";
import Validatable from "@dikac/t-validatable/validatable";
import Trim from "../trim";

 //  predicate object

export default class Sentence implements ValueOf<string>, Validatable {

    constructor(
        public valid : boolean,
        public subject : string = 'value',
        public predicate: {
            invalid : string,
            valid : string
        } = {
            invalid : 'is not',
            valid : 'is'
        },
        public object : string = 'valid'
    ) {
    }

    valueOf(): string {

        return this.message;
    }

    toString() : string {

        return this.message;
    }

    get message() : string {

        let messages : string[] = [];

        messages.push(this.subject);

        messages.push(this.valid ? this.predicate.valid : this.predicate.invalid);

        messages.push(this.object);

        messages = messages.filter(NotEmpty).map((message)=>Trim(message));

        return messages.join(' ');
    }

}
