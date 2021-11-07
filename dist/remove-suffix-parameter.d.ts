import String from "./string/string";
import Suffix from "./suffix/suffix";
/**
 * remove {@param suffix} at the end of {@param value}
 */
export declare type RemoveSuffixArgument = String & Partial<Suffix>;
export default function RemoveSuffixParameter({ value, suffix }: RemoveSuffixArgument): string;
