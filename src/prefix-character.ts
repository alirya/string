import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";

/**
 * prepend {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function PrefixCharacter({string, prefix} : String & Prefix) : string {

    if(string.length !== 0) {

        prefix = prefix[0];

        if(string[0] !== prefix) {

            return prefix + string;
        }
    }

    return string;

}
