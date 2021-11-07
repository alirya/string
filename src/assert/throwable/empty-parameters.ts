import EmptyType from "../string/empty";

export default function EmptyParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(EmptyType.Parameters(value, false, subject))
}

