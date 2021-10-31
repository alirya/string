import String from "./string/string";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import Prefix from "./prefix/prefix";
declare namespace Trim {
    const Parameter: typeof TrimParameter;
    const Object: typeof TrimObject;
    type Argument = TrimArgument;
}
/**
 * @see trim
 */
export declare function TrimParameter(value: string, prefix?: string, suffix?: string, circumfix?: string): string;
export declare type TrimArgument = String & Partial<Circumfix & Prefix & Suffix>;
export declare function TrimObject({ value, circumfix, prefix, suffix }: TrimArgument): string;
export default Trim;
