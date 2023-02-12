import Value from '@alirya/value/value.js';
import Pattern from '../pattern/pattern/pattern.js';
/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */

export function MatchParameters(value : string, pattern : RegExp) : boolean {

    return value.match(pattern) !== null;
}


/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */

export function MatchParameter({
    value,
    pattern
} : Value<string> & Pattern) : boolean {

    return MatchParameters(value, pattern);
}


namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
}
export default Match;
