import Truncate from "../../truncate";
import Sentences from "../../message/sentences";
import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";


export default Match;
namespace Match {

    export const Parameter = MatchParameter;
    export const Object = MatchObject;
    export type Argument = MatchArgument;
}

export function MatchParameter(
    value : string,
    valid : boolean,
    pattern : RegExp,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.reject.push('does not match against');
    sentence.accept.push('match against');

    sentence.expect.push(pattern.source);

    sentence.subject.push(subject, `"${Truncate(value, 8)}"`);

    return sentence.message;
}

export type MatchArgument = Validatable & Value<string> & Pattern & {subject ?: string};


export function MatchObject({
    valid,
    value,
    pattern,
    subject = 'string',
} : MatchArgument) : string {

    return MatchParameter(value, valid, pattern, subject);
}
