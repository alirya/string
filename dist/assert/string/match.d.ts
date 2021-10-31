import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";
export default Match;
declare namespace Match {
    const Parameter: typeof MatchParameter;
    const Object: typeof MatchObject;
    type Argument = MatchArgument;
}
export declare function MatchParameter(value: string, valid: boolean, pattern: RegExp, subject?: string): string;
export declare type MatchArgument = Validatable & Value<string> & Pattern & {
    subject?: string;
};
export declare function MatchObject({ valid, value, pattern, subject, }: MatchArgument): string;
