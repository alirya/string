import {trim, trimEnd} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";

/**
 * @see trim
 */

export default function Trim({string, circumfix} : String & Partial<Circumfix>) {

    return trimEnd(string, circumfix)
}
