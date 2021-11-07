import NumericType from "../string/numeric";

export default function NumericParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NumericType.Parameters(value, false, subject))
}
