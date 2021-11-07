import String from "./string/string";
import Suffix from "./suffix/suffix";
export declare type PadSuffixArgument = String & Suffix & {
    length: number;
};
export default function PadSuffixObject({ value, length, suffix }: PadSuffixArgument): string;
