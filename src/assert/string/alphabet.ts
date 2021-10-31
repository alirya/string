import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Builder from "../../message/builder";


export default Alphabet;
namespace Alphabet {

    export const Parameter = AlphabetParameter;
    export const Object = AlphabetObject;
    export type Argument = AlphabetArgument;
}


export function AlphabetParameter(
    value : string,
    valid : boolean,
    subject : string = 'string'
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('alphabet');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        let match = new Match(value, /[^a-zA-Z]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contains', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}

export type AlphabetArgument = Validatable & Value<string> & {subject ?: string };


export function AlphabetObject({
    valid,
    value,
    subject
} : AlphabetArgument) : string {

    return AlphabetParameter(value, valid, subject);
}
