import {MatchParameters} from './match.js';

/**
 * check if {@param source} is numeric
 *
 * @param source
 */
export default function Numeric(source : string) : boolean {

    return MatchParameters(source, /^[-+]*\d*(\.\d*)?$/i);
}
