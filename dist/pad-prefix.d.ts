import String from "./string/string";
import Prefix from "./prefix/prefix";
declare namespace PadPrefix {
    const Parameter: typeof PadPrefixParameter;
    const Object: typeof PadPrefixObject;
    type Argument = PadPrefixArgument;
}
/**
 * @see padStart
 */
export declare function PadPrefixParameter(value: string, length: number, prefix: string): string;
export declare type PadPrefixArgument = String & Prefix & {
    length: number;
};
export declare function PadPrefixObject({ value, length, prefix }: String & Prefix & {
    length: number;
}): string;
export default PadPrefix;
