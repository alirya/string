import Sentences from "../../message/sentences";
import String from "../../string/string";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";

export default Minimum;
namespace Minimum {

    export const Parameter = MinimumParameter;
    export const Object = MinimumObject;
    export type Argument = MinimumArgument;
}

export function MinimumParameter(
    value : string,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

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

export type MinimumArgument = Validatable & String & MinimumNumber & Inclusive & {subject ?: string};

export function MinimumObject({
    value,
    valid,
    minimum,
    inclusive,
    subject = 'string',
} : MinimumArgument) : string {

    return MinimumParameter(value, valid, minimum, inclusive, subject);
}
