import Sentence from "../../message/sentence";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default NotEmpty;
namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Object = NotEmptyObject;
    export type Argument = NotEmptyArgument;
}

export function NotEmptyParameter(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

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

export type NotEmptyArgument = Validatable & Value<string> & {subject?:string};

export function NotEmptyObject({
    valid,
    value,
    subject,
} : NotEmptyArgument) : string {

    return NotEmptyParameter(value, valid, subject);
}
