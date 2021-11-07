import NotBlankType from "../string/not-empty";

export default function NotBlankParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NotBlankType.Parameters(value, false, subject))
}

