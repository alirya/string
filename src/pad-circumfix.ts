import {pad, padEnd} from "lodash";
import String from "./string/string";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";


namespace PadCircumfix {
    export const Parameter = PadCircumfixParameter;
    export const Object = PadCircumfixObject;
    export type Argument = PadCircumfixArgument;
}


/**
 * @see pad
 */

export function PadCircumfixParameter(value : string, length : number, circumfix : string) {

    return pad(value, length, circumfix)
}

export type PadCircumfixArgument = String & Circumfix & {length:number};

export function PadCircumfixObject({value, length , circumfix} : PadCircumfixArgument) {

    return pad(value, length, circumfix)
}

export default PadCircumfix;

