/**
 * remove {@param character} at the start of {@param string}
 */
export default function RemovePrefixCharacter({ string, prefix }) {
    if (string.length !== 0) {
        prefix = prefix[0];
        if (string[0] === prefix) {
            return string.slice(1);
        }
    }
    return string;
}
//# sourceMappingURL=remove-prefix-character.js.map