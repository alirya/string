import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";
export declare type MatchArgument = Value<string> & Pattern & {
    subject?: string;
};
export default function MatchParameter({ value, pattern, subject, }: MatchArgument): Error;
