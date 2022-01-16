import MatchType from '../string/match-parameters';


export default function MatchParameters(
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : Error {

    return new Error(MatchType(value, false, pattern, subject));
}


