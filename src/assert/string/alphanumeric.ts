import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Alphanumeric;
namespace Alphanumeric {

    export const Parameter = AlphanumericParameter;
    export const Object = AlphanumericObject;
    export type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}


export function AlphanumericParameter(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('alphanumeric');
    sentence.subject.push(subject);
    sentence.comma.push('expect');

    if(!valid) {

        let match = new Match(value, /[^a-zA-Z0-9]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contains', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}

export type AlphanumericArgument = Validatable & Value<string> & {subject ?: string};

export function AlphanumericObject({
    valid,
    value,
    subject = 'string'
} : AlphanumericArgument) : string {

    return AlphanumericParameter(valid, value, subject);
}
