import Prefix from "./prefix/prefix";
import String from "./string/string";
export declare type TrimPrefixArgument = String & Partial<Prefix>;
export default function TrimPrefixParameter({ value, prefix }: TrimPrefixArgument): string;
