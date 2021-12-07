import EmptyType from "../string/empty-parameters";

export default function EmptyParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(EmptyType(value, false, subject))
}

