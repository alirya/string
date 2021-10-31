import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Separator from "./separator/separator";
import Value from "@dikac/t-value/value";
declare namespace JoinAffix {
    const Parameter: typeof JoinAffixParameter;
    const Object: typeof JoinAffixObject;
    type Argument = JoinAffixArgument;
}
export declare function JoinAffixParameter(value: string[], separator: string, prefix?: string, suffix?: string): string;
export declare type JoinAffixArgument = Partial<Prefix & Suffix> & Separator & Value<string[]>;
export declare function JoinAffixObject({ value, separator, prefix, suffix, }: JoinAffixArgument): string;
export default JoinAffix;
