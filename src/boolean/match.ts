import Value from "@dikac/t-value/value";
import Pattern from "../pattern/pattern/pattern";
/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */

export function MatchParameter(value : string, pattern : RegExp) : boolean {

    return value.match(pattern) !== null;
}


export function MatchObject({
    value,
    pattern
} : Value<string> & Pattern) : boolean {

    return MatchParameter(value, pattern);
}


namespace Match {

    export const Parameter = MatchParameter;
    export const Object = MatchObject;
}

export default Match;
