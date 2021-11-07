import Match from "./match";

/**
 * check if {@param string} is digit
 * @param string
 */
export default function Digit(string : string) : boolean {

    return Match.Parameter(string, /^\d*$/i)
}
