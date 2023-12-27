import Match from '../../value/match.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function AlphanumericParameters(
    value : string,
    valid : boolean,
    subject  = 'string'
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('alphanumeric');

    if(!valid) {

        const match = new Match(value, /[^a-zA-Z0-9]{1,5}/);

        if(match.valid) {

            strings[2] = 'alphanumeric,';

            strings.push('contains', `"${match.match[0]}"`);
        }
    }

    return strings.join(' ') + '.';
}


export type AlphanumericArgument = Validatable & Value<string> & {subject ?: string};

export function AlphanumericParameter({
    valid,
    value,
    subject
} : AlphanumericArgument) : string {

    return AlphanumericParameters(value, valid, subject);
}


namespace Alphanumeric {
    export const Parameters = AlphanumericParameters;
    export const Parameter = AlphanumericParameter;
    export type Argument = AlphanumericArgument;
}
export default Alphanumeric;
