import MatchType from "../string/match";


export default function MatchParameters(
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : Error {

    return new Error(MatchType.Parameters(value, false, pattern, subject))
}


