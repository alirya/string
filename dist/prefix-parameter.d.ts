import String from "./string/string";
import Prefix from "./prefix/prefix";
export declare type PrefixArgument = String & Prefix;
export default function PrefixParameter({ value, prefix }: PrefixArgument): string;
