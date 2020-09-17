/**
 * append {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function SuffixCharacter(string, character) {
    if (string.length !== 0) {
        character = character[0];
        if (string[string.length - 1] !== character) {
            return string + character;
        }
    }
    return string;
}
//# sourceMappingURL=suffix-character.js.map