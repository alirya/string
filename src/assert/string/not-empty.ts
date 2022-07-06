import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';

export function NotEmptyParameters(
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

    strings.push('empty string');

    return strings.join(' ') + '.';
}

export type NotEmptyArgument = Validatable & Value<string> & {subject?:string};

export function NotEmptyParameter({
    valid,
    value,
    subject,
} : NotEmptyArgument) : string {

    return NotEmptyParameters(value, valid, subject);
}



namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Argument = NotEmptyArgument;
}
export default NotEmpty;
