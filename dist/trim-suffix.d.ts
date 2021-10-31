import Suffix from "./suffix/suffix";
import String from "./string/string";
export declare const TrimSuffixParameter: (string: string, suffix?: string) => string;
declare namespace TrimSuffix {
    const Parameter: (string: string, suffix?: string | undefined) => string;
    const Object: typeof TrimSuffixObject;
    type Argument = TrimSuffixArgument;
}
export declare type TrimSuffixArgument = String & Partial<Suffix>;
export declare function TrimSuffixObject({ value, suffix }: TrimSuffixArgument): string;
export default TrimSuffix;
