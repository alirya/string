import {startsWith} from "lodash";
import Value from "@dikac/t-value/value";
import Prefix from "../prefix/prefix";
/**
 * @see startsWith
 * @param value
 * @param prefix
 */
export default function Prefix({value, prefix} : Value<string> & Prefix<string>) : boolean {

    return startsWith(value, prefix);

}
