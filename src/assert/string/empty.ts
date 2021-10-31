import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Empty;
namespace Empty {

    export const Parameter = EmptyParameter;
    export const Object = EmptyObject;
    export type Argument = EmptyArgument;
}

export function EmptyParameter(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('empty', 'string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid && value.length) {

        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);

    }

    return sentence.message;
}

export type EmptyArgument = Validatable & Value<string> & {subject?:string};

export function EmptyObject({
    valid,
    value,
    subject = 'string',
} : EmptyArgument) : string {

    return EmptyParameter(value, valid, subject);
}
