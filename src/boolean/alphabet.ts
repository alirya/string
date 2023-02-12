import {MatchParameters} from './match.js';

export default function Alphabet(source : string) : boolean {

    return MatchParameters(source, /^[a-z]*$/i);
}
