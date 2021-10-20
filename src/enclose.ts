import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";
import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import String from "./string/string";

/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export default function Enclose ({
    string,
    prefix,
    suffix,
} : String & Prefix & Suffix) {

    string = PrefixCharacter({string, prefix});
    string = SuffixCharacter({string, suffix});

    return string;
}
