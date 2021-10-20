import Truncate from "../../truncate";
import Sentences from "../../message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";

export default function Match({
    valid,
    value,
    pattern,
    subject = 'string',
} : Validatable & Value<string> & Pattern & {subject ?: string}) : string {

    let sentence = new Sentences(valid);

    sentence.reject.push('does not match against');
    sentence.accept.push('match against');

    sentence.expect.push(pattern.source);

    sentence.subject.push(subject, `"${Truncate(value, 8)}"`);

    return sentence.message;
}
