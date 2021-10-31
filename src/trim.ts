import {trim, trimEnd, trimStart} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import TrimSuffix from "./trim-suffix";
import Prefix from "./prefix/prefix";


namespace Trim {

    export const Parameter = TrimParameter;
    export const Object = TrimObject;
    export type Argument = TrimArgument;
}
/**
 * @see trim
 */

export function TrimParameter(value: string, prefix?: string, suffix?: string, circumfix?: string) {

    value = circumfix === undefined ? value : trim(value, circumfix);
    value = prefix === undefined ? value : Trim.Parameter(value, prefix);
    value = suffix === undefined ? value : TrimSuffix.Parameter(value, suffix);

    return value;
}

export type TrimArgument = String & Partial<Circumfix & Prefix & Suffix>;

export function TrimObject({value, circumfix, prefix, suffix} : TrimArgument) {

    return TrimParameter(value, prefix, suffix, circumfix);
}

export default Trim;
