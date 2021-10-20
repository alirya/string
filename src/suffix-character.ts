import String from "./string/string";
import Suffix from "./suffix/suffix";

/**
 * append {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function SuffixCharacter({string, suffix} : String & Suffix) : string {

    // TODO IMPROVE IMPLEMENTATION
    if(string.length !== 0) {

        suffix = suffix[0];

        if(string[string.length - 1] !== suffix) {

            return string + suffix;
        }
    }

    return string;

}
