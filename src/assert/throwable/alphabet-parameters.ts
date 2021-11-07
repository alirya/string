import AlphabetType from "../string/alphabet";


export default function AlphabetParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphabetType.Parameters(value, false, subject))
}

