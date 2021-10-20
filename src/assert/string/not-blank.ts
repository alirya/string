import Sentence from "../../message/sentence";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function NotBlank({
    valid,
    value,
    subject = 'string',
} : Validatable & Value<string> & {subject : string}) : string {

    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';

    sentence.subject = subject;
    sentence.expect = 'blank string';

    return sentence.message;
}
