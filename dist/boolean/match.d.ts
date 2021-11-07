import Value from "@dikac/t-value/value";
import Pattern from "../pattern/pattern/pattern";
/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */
export declare function MatchParameter(value: string, pattern: RegExp): boolean;
export declare function MatchObject({ value, pattern }: Value<string> & Pattern): boolean;
declare namespace Match {
    const Parameter: typeof MatchParameter;
    const Object: typeof MatchObject;
}
export default Match;
