import NumericType from '../string/numeric';
import Value from '@alirya/value/value';

export function NumericParameters(
    value : unknown,
    subject : string = 'string'
) : Error {

    return new Error(NumericType.Parameters(value, false, subject));
}

export function NumericParameter({
    value,
    subject
} : Value<unknown> & {subject ?: string}) : Error {

    return NumericParameters(value, subject);
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
