import Sentence from "../../message/sentence";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export default NotBlank;
namespace NotBlank {

    export const Parameter = NotBlankParameter;
    export const Object = NotBlankObject;
    export type Argument = NotBlankArgument;
}

export function NotBlankParameter(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';

    sentence.subject = subject;
    sentence.expect = 'blank string';

    return sentence.message;
}

export type NotBlankArgument = Validatable & Value<string> & {subject ?: string};


export function NotBlankObject({
    valid,
    value,
    subject,
} : NotBlankArgument) : string {

    return NotBlankParameter(value, valid, subject);
}
