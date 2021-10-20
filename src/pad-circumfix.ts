import {pad, padEnd} from "lodash";
import String from "./string/string";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";
/**
 * @see pad
 */

export default function PadCircumfix({string, length , circumfix} : String & Circumfix & {length:number}) {

    return pad(string, length, circumfix)
}


