import {MatchParameters} from './match.js';

export default function Alphanumeric(source : string) : boolean {

    return MatchParameters(source, /^[0-9a-z]*$/i);
}

export {Alphanumeric as IsAlphanumeric};
