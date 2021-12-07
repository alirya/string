import AlphabetType from "../string/alphabet-parameters";


export default function AlphabetParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphabetType(value, false, subject))
}

