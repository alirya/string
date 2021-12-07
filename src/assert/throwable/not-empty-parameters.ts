import NotEmptyType from "../string/not-empty-parameters";

export default function NotEmptyParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NotEmptyType(value, false, subject))
}
