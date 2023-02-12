import {NotEmptyParameters} from '../string/not-empty.js';
import Value from '@alirya/value/value.js';

export function NotBlankParameters(
    value : string,
    subject  = 'string'
) : Error {

    return new Error(NotEmptyParameters(value, false, subject));
}

export function NotBlankParameter({
       value,
       subject
    } : Value<string> & {subject ?: string}) : Error {

    return NotBlankParameters(value, subject);
}

namespace NotBlank {
    export const Parameters = NotBlankParameters;
    export const Parameter = NotBlankParameter;
}
export default NotBlank;
