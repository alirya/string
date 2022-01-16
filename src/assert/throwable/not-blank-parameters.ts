import NotBlankType from '../string/not-empty-parameters';

export default function NotBlankParameters(
    value : string,
    subject : string = 'string'
) : Error {

    return new Error(NotBlankType(value, false, subject));
}

