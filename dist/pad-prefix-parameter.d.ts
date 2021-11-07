import String from "./string/string";
import Prefix from "./prefix/prefix";
export declare type PadPrefixArgument = String & Prefix & {
    length: number;
};
export default function PadPrefixParameter({ value, length, prefix }: PadPrefixArgument): string;
