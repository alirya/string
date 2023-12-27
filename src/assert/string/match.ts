import {TruncateParameters} from '../../truncate.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';
import Pattern from '../../pattern/pattern/pattern.js';

export function MatchParameters(
    value : string,
    valid : boolean,
    pattern : RegExp,
    subject  = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, `"${TruncateParameters(value, 8)}"`);

    if(valid) {

        strings.push('match against');

    } else {

        strings.push('does not match against');
    }

    strings.push(pattern.source);

    return strings.join(' ') + '.';
}

export type MatchArgument = Validatable & Value<string> & Pattern & {subject ?: string};

export function MatchParameter({
    valid,
    value,
    pattern,
    subject,
} : MatchArgument) : string {

    return MatchParameters(value, valid, pattern, subject);
}



namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
    export type Argument = MatchArgument;
}
export default Match;
