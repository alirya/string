import DigitType from "../string/digit";

export default function DigitParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(DigitType.Parameters(value, false, subject))
}
