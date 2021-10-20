import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";
/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export default function Enclose({ string, prefix, suffix, }) {
    string = PrefixCharacter({ string, prefix });
    string = SuffixCharacter({ string, suffix });
    return string;
}
//# sourceMappingURL=enclose.js.map