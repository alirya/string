import {padEnd, padStart} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";
/**
 * @see padStart
 */

export default function PadSuffix({string, length , prefix} : String & Prefix & {length:number}) {

    return padStart(string, length, prefix)
}
