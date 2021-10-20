import Sentences from "../../message/sentences";
import String from "../../string/string";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";

export default function Minimum({
    valid,
    string,
    minimum,
    inclusive,
    subject = 'string',
} : Validatable & String & MinimumNumber & Inclusive & {subject ?: string}) : string {

    let sentence = new Sentences(valid);

    sentence.subject.push(subject);
    sentence.subject.push('length');

    if(valid) {

        sentence.accept.push(`is greater`);

    } else {

        sentence.reject.push(`must greater`);
    }

    if(inclusive) {

        sentence.expect.push(`or equal`);
    }

    sentence.expect.push('than', minimum.toString());

    return sentence.message;
}
