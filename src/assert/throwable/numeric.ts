import NumericType from '../string/numeric.js';
import Value from '@alirya/value/value.js';

export function NumericParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NumericType.Parameters(value, false, subject));
}

export function NumericParameter({
    value,
    subject
} : Value<string> & {subject ?: string}) : Error {

    return NumericParameters(value, subject);
}




namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
