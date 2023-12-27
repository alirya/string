import DigitType from '../string/digit.js';
import Value from '@axiona/value/value.js';

export function DigitParameters(
    value : string,
    subject  = 'string'
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
