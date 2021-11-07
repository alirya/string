import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";
export declare type MatchArgument = Validatable & Value<string> & Pattern & {
    subject?: string;
};
export default function MatchParameter({ valid, value, pattern, subject, }: MatchArgument): string;
