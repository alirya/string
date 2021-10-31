import {padEnd, padStart} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";

namespace PadPrefix {

    export const Parameter = PadPrefixParameter;
    export const Object = PadPrefixObject;
    export type Argument = PadPrefixArgument;
}


/**
 * @see padStart
 */

export function PadPrefixParameter(value : string, length : number, prefix : string) : string {

    return padStart(value, length, prefix)
}
export type PadPrefixArgument = String & Prefix & {length:number};

export function PadPrefixObject({value, length , prefix} : String & Prefix & {length:number}) {

    return PadPrefixParameter(value, length, prefix)
}

export default PadPrefix;
