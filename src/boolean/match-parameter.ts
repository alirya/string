import Value from "@dikac/t-value/value";
import Pattern from "../pattern/pattern/pattern";
import MatchParameters from "./match-parameters";
/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */

export default function MatchParameter({
    value,
    pattern
} : Value<string> & Pattern) : boolean {

    return MatchParameters(value, pattern);
}
