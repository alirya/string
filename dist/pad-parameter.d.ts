import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";
export declare type PadArgumentPair = String & Prefix & Suffix & {
    length: number;
};
export declare type PadArgumentCircumfix = String & Circumfix & {
    length: number;
};
export default function PadParameter({ value, length, prefix, suffix }: PadArgumentPair): string;
export default function PadParameter({ value, length, circumfix }: PadArgumentCircumfix): string;
