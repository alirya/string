import Match from "../../validatable/match";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default function Numeric({
    valid,
    value,
    subject = 'string'
} : Validatable & Value<string> & {subject?:string}) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('numeric');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        let match = Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contain', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}
