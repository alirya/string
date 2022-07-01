import DigitType from '../string/digit';
import Value from '@alirya/value/value';

export function DigitParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(DigitType.Parameters(value, false, subject));
}

export type DigitArgument = Value<string> & {subject ?: string};

export function DigitParameter({
    value,
    subject = 'string'
} : DigitArgument) : Error {

    return DigitParameters(value, subject);
}




namespace Digit {
    export const Parameters = DigitParameters;
    export const Parameter = DigitParameter;
    export type Argument = DigitArgument;
}
export default Digit;
