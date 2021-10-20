/**
 * remove {@param character} at the end of {@param string}
 */
export default function RemoveSuffixCharacter({ string, suffix }) {
    if (string.length !== 0) {
        suffix = suffix[0];
        if (string[string.length - 1] === suffix) {
            return string.slice(0, string.length - 1);
        }
    }
    return string;
}
//# sourceMappingURL=remove-suffix-character.js.map