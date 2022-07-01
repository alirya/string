import {MatchParameters} from './match';

export default function Alphabet(source : string) : boolean {

    return MatchParameters(source, /^[a-z]*$/i);
}
