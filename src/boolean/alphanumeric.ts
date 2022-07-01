import {MatchParameters} from './match';

export default function Alphanumeric(source : string) : boolean {

    return MatchParameters(source, /^[0-9a-z]*$/i);
}
