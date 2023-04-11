import {MatchParameters} from './match.js';

/**
 * check if {@param string} is digit
 * @param string
 */
export default function Digit(string : string) : boolean {

    return MatchParameters(string, /^\d*$/i);
}

export {Digit as IsDigit};