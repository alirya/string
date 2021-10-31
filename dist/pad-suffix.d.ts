import String from "./string/string";
import Suffix from "./suffix/suffix";
declare namespace PadSuffix {
    const Parameter: typeof PadSuffixParameter;
    const Object: typeof PadSuffixObject;
    type Argument = PadSuffixArgument;
}
/**
 * @see padEnd
 */
export declare function PadSuffixParameter(string: string, length: number, suffix: string): string;
export declare type PadSuffixArgument = String & Suffix & {
    length: number;
};
export declare function PadSuffixObject({ value, length, suffix }: PadSuffixArgument): string;
export default PadSuffix;
