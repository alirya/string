import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Separator from "./separator/separator";
import Value from "@dikac/t-value/value";
export declare type JoinAffixArgument = Partial<Prefix & Suffix> & Separator & Value<string[]>;
export default function JoinAffixParameter({ value, separator, prefix, suffix, }: JoinAffixArgument): string;
