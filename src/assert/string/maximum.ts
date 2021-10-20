import Sentences from "../../message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";

export default function Maximum({
    valid,
    string,
    maximum,
    inclusive,
    subject = 'string',
} : Validatable & String & MaximumNumber & Inclusive & {subject ?: string}) : string {

    let sentence = new Sentences(valid);

    sentence.subject.push(subject);
    sentence.subject.push('length');

    if(valid) {

        sentence.accept.push(`is lower`);

    } else {

        sentence.reject.push(`must lower`);
    }

    if(inclusive) {

        sentence.expect.push(`or equal`);
        //sentence.predicate.invalid.push(`or equal`);
    }

    sentence.expect.push('than', maximum.toString());

    return sentence.message;
}
