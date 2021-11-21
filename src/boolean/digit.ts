import Match from "./match-parameters";

/**
 * check if {@param string} is digit
 * @param string
 */
export default function Digit(string : string) : boolean {

    return Match(string, /^\d*$/i)
}
