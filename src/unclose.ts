import RemovePrefixCharacter from "./remove-prefix-character";
import RemoveSuffixCharacter from "./remove-suffix-character";
import String from "./string/string";
import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";

/**
 * remove {@param prefix} from start and {@param suffix} from end of {@param string}
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export default function Unclose (
    {string, prefix, suffix}  : String & Prefix & Suffix
) {

    string = RemovePrefixCharacter({string, prefix});
    string = RemoveSuffixCharacter({string, suffix});

    return string;
}
