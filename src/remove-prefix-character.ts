import String from "./string/string";
import Prefix from "./prefix/prefix";

/**
 * remove {@param character} at the start of {@param string}
 */
export default function RemovePrefixCharacter({string, prefix} : String & Prefix) : string {

    if(string.length !== 0) {

        prefix = prefix[0];

        if(string[0] === prefix) {

            return string.slice(1);
        }
    }

    return string;

}
