import AlphanumericType from '../string/alphanumeric.js';
import Value from '@alirya/value/value.js';

export function AlphanumericParameters(
    value : string,
    subject  = 'string'
) : Error {

    return new Error(AlphanumericType.Parameters(value, false, subject));
}



export type AlphanumericArgument = Value<string> & {subject ?: string};

export function AlphanumericParameter({
    value,
    subject
} : AlphanumericArgument) : Error {

    return AlphanumericParameters(value, subject);
}



namespace Alphanumeric {
    export const Parameters = AlphanumericParameters;
    export const Parameter = AlphanumericParameter;
    export type Argument = AlphanumericArgument;
}
export default Alphanumeric;
