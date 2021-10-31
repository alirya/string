import Suffix from "./suffix/suffix";
import Value from "@dikac/t-value/value";
declare namespace Suffix {
    const Parameter: typeof SuffixParameter;
    const Object: typeof SuffixObject;
    type Argument = SuffixArgument;
}
/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */
export declare function SuffixParameter(value: string, suffix?: string): string;
export declare type SuffixArgument = Value<string> & Partial<Suffix>;
export declare function SuffixObject({ value, suffix }: SuffixArgument): string;
export default Suffix;
