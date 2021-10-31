import {padEnd} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";

namespace PadSuffix {

    export const Parameter = PadSuffixParameter;
    export const Object = PadSuffixObject;
    export type Argument = PadSuffixArgument;
}


/**
 * @see padEnd
 */

export function PadSuffixParameter (string : string, length : number, suffix : string) : string {

    return padEnd(string, length, suffix);
}

export type PadSuffixArgument = String & Suffix & {length:number};

export function PadSuffixObject({value, length , suffix} : PadSuffixArgument) {

    return PadSuffixParameter(value, length, suffix)
}

export default PadSuffix;
