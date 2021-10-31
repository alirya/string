import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Blank;
namespace Blank {

    export const Parameter = BlankParameter;
    export const Object = BlankObject;
    export type Argument = BlankArgument;
}


export function BlankParameter(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('blank', 'string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid && value.length) {

        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);

    }

    return sentence.message;
}

export type BlankArgument = Validatable & Value<string> & {subject ?: string };

export function BlankObject({
    valid,
    value,
    subject = 'string',
} : BlankArgument) : string {

    return BlankParameter(valid, value, subject);
}

