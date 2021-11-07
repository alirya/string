import NotEmptyType from "../string/not-empty";

export default function NotEmptyParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NotEmptyType.Parameters(value, false, subject))
}
