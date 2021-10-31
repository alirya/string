import {padEnd, padStart} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";
import PadCircumfix from "./pad-circumfix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";

namespace Pad {

    export const Parameter = PadParameter;
    export const Object = PadObject;
    export type ArgumentCircumfix = PadArgumentCircumfix;
    export type ArgumentPair = PadArgumentPair;
}


/**
 * @see padStart
 */

export function PadParameter(
    value : string,
    length : number,
    circumfix : string,
) : string;

export function PadParameter(
    value : string,
    length : number,
    prefix : string,
    suffix : string,
) : string;

export function PadParameter(
    value : string,
    length : number,
    prefix : string,
    suffix ?: string,
) : string {

    value = PadPrefix.Parameter(value, length, prefix);
    value = PadSuffix.Parameter(value, length, suffix || prefix);

    return value;

}
export type PadArgumentPair = String & Prefix & Suffix & {length:number};
export type PadArgumentCircumfix = String  & Circumfix & {length:number};

export function PadObject({value, length, prefix, suffix} : PadArgumentPair) : string;
export function PadObject({value, length, circumfix} : PadArgumentCircumfix) : string;
export function PadObject({value, length, prefix, suffix, circumfix} : PadArgumentPair & PadArgumentCircumfix) : string {

    return PadParameter(value, length, circumfix || prefix, circumfix || suffix)
}

export default Pad;
