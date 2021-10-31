import Sentences from "../../message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";


export default Maximum;
namespace Maximum {

    export const Parameter = MaximumParameter;
    export const Object = MaximumObject;
    export type Argument = MaximumArgument;
}

export function MaximumParameter(
    value : string,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

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

export type MaximumArgument = Validatable & String & MaximumNumber & Inclusive & {subject ?: string};

export function MaximumObject({
    valid,
    value,
    maximum,
    inclusive,
    subject = 'string',
} : MaximumArgument) : string {

    return MaximumParameter(value, valid, maximum, inclusive, subject);
}
