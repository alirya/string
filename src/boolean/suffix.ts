import {endsWith} from "lodash";
import Value from "@dikac/t-value/value";
import Suffix from "../suffix/suffix";

/**
 * @see startsWith
 * @param string
 * @param suffix
 */
export default function Suffix({value, suffix} : Value<string> & Suffix) : boolean {

    return endsWith(value, suffix);

}
