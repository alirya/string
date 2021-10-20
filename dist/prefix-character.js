/**
 * prepend {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function PrefixCharacter({ string, prefix }) {
    if (string.length !== 0) {
        prefix = prefix[0];
        if (string[0] !== prefix) {
            return prefix + string;
        }
    }
    return string;
}
//# sourceMappingURL=prefix-character.js.map