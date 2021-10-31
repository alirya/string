import Match from "../../validatable/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default Numeric;
namespace Numeric {

    export const Parameter = NumericParameter;
    export const Object = NumericObject;
    export type Argument = NumericArgument;
}

export function NumericParameter(
    value : string,
    valid : boolean,
    subject : string = 'string'
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('numeric');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        let match = new Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contain', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}

export type NumericArgument = Validatable & Value<string> & {subject?:string}

export function NumericObject({
    valid,
    value,
    subject
} : NumericArgument) : string {

    return NumericParameter(value, valid, subject);
}
