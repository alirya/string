import DigitType from '../string/digit-parameters';

export default function DigitParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(DigitType(value, false, subject));
}
