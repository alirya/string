import Match from "./match";
/**
 * check if {@param string} is digit
 * @param string
 */
export default function Digit(string) {
    return Match.Parameter(string, /^\d*$/i);
}
//# sourceMappingURL=digit.js.map