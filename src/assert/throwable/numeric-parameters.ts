import NumericType from '../string/numeric-parameters';

export default function NumericParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NumericType(value, false, subject));
}
