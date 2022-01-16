import AlphanumericType from '../string/alphanumeric-parameters';

export default function AlphanumericParameter(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(AlphanumericType(value, false, subject));
}

