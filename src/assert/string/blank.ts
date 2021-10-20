import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Blank({
    valid,
    value,
    subject = 'string',
} : Validatable & Value<string> & {subject ?: string }) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('blank', 'string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid && value.length) {

        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);

    }

    return sentence.message;
}
