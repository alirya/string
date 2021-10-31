import String from "./string/string";
import Prefix from "./prefix/prefix";
declare namespace Prefix {
    const Parameter: typeof PrefixParameter;
    const Object: typeof PrefixObject;
    type Argument = PrefixArgument;
}
/**
 * prepend {@param prefix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param prefix
 */
export declare function PrefixParameter(value: string, prefix?: string): string;
export declare type PrefixArgument = String & Prefix;
export declare function PrefixObject({ value, prefix }: String & Prefix): string;
export default Prefix;
