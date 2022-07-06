import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';

export function NotBlankParameters(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('must not');

    }

    strings.push('blank string');

    return strings.join(' ') + '.';
}

export type NotBlankArgument = Validatable & Value<string> & {subject ?: string};

export function NotBlankParameter({
    valid,
    value,
    subject,
} : NotBlankArgument) : string {

    return NotBlankParameters(value, valid, subject);
}


namespace NotBlank {
    export const Parameters = NotBlankParameters;
    export const Parameter = NotBlankParameter;
    export type Argument = NotBlankArgument;
}
export default NotBlank;
