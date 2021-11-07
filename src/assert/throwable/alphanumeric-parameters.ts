import AlphanumericType from "../string/alphanumeric";

export default function AlphanumericParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphanumericType.Parameters(value, false, subject))
}

