import Sentence from "../../message/sentence";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function NotEmpty({
    valid,
    value,
    subject = 'string',
} : Validatable & Value<string> & {subject?:string}) : string {

    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';
    // sentence.predicate = {
    //     invalid : 'is not',
    //     valid : 'is'
    // };
    sentence.subject = subject;
    sentence.expect = 'empty string';
    //
    // if(!valid) {
    //
    //     sentence.subject = [subject, Truncate(value, 5)].join(' ');
    // }

    return sentence.message;
}
