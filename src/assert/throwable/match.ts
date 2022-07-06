import MatchType from '../string/match.js';
import Value from '@alirya/value/value.js';
import Pattern from '../../pattern/pattern/pattern.js';

export function MatchParameters(
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : Error {

    return new Error(MatchType.Parameters(value, false, pattern, subject));
}

export type MatchArgument = Value<string> & Pattern & {subject ?: string};

export function MatchParameter({
    value,
    pattern,
    subject = 'string',
} : MatchArgument) : Error {

    return MatchParameters(value, pattern, subject);
}



namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
    export type Argument = MatchArgument;
}
export default Match;
