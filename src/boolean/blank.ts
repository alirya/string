/**
 * check if {@param string} is white space (\s) or empty string {@see Empty}
 *
 * @param string
 */
import Empty from "./empty";
import Trim from "../trim";

export default function Blank(
    string : string,
) : boolean {

    return Empty(Trim(string));
}
