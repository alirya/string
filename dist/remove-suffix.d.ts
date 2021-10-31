import String from "./string/string";
import Suffix from "./suffix/suffix";
declare namespace RemoveSuffix {
    const Parameter: typeof RemoveSuffixParameter;
    const Object: typeof RemoveSuffixObject;
    type Argument = RemoveSuffixArgument;
}
/**
 * remove {@param suffix} at the end of {@param value}
 */
export declare function RemoveSuffixParameter(value: string, suffix?: string): string;
export declare type RemoveSuffixArgument = String & Partial<Suffix>;
export declare function RemoveSuffixObject({ value, suffix }: RemoveSuffixArgument): string;
export default RemoveSuffix;
