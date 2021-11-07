import Value from "@dikac/t-value/value";
import Pattern from "../pattern/pattern/pattern";
export declare type MatchArgument = Pattern & {
    error?: (argument: Value<string> & Pattern) => Error;
};
export default function MatchParameter(value: string, { pattern, error, }: MatchArgument): asserts value is string;
