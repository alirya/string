import String from "./string/string";
import Prefix from "./prefix/prefix";
declare namespace RemovePrefixCharacter {
    const Parameter: typeof RemovePrefixCharacterParameter;
    const Object: typeof RemovePrefixCharacterObject;
    type Argument = RemovePrefixCharacterArgument;
}
/**
 * remove {@param prefix} at the start of {@param value}
 */
export declare function RemovePrefixCharacterParameter(value: string, prefix?: string): string;
export declare type RemovePrefixCharacterArgument = String & Prefix;
export declare function RemovePrefixCharacterObject({ value, prefix }: String & Prefix): string;
export default RemovePrefixCharacter;
