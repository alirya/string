import Prefix from "./prefix/prefix";
import String from "./string/string";
export declare const TrimPrefixParameter: (string: string, prefix?: string) => string;
declare namespace TrimPrefix {
    const Parameter: (string: string, prefix?: string | undefined) => string;
    const Object: typeof TrimPrefixObject;
    type Argument = TrimPrefixArgument;
}
export declare type TrimPrefixArgument = String & Partial<Prefix>;
export declare function TrimPrefixObject({ value, prefix }: TrimPrefixArgument): string;
export default TrimPrefix;
