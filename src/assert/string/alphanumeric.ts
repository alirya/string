import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Alphanumeric({
    valid,
    value,
    subject = 'string'
} : Validatable & Value<string> & {subject ?: string}) : string {

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
