import Match from '../../value/match.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function AlphabetParameters(
    value : string,
    valid : boolean,
    subject  = 'string'
) : string {

    const strings: string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');


    } else {

        strings.push('must');

    }

    strings.push('alphabet');

    if(!valid) {

        const match = new Match(value, /[^a-zA-Z]{1,5}/);

        if(match.valid) {

            strings[2] = 'alphabet,';

            strings.push('contains', `"${match.match[0]}"`);
        }
    }

    return strings.join(' ') + '.';
}

export type AlphabetArgument = Validatable & Value<string> & {subject ?: string };

export function AlphabetParameter({
    valid,
    value,
    subject
} : AlphabetArgument) : string {

    return AlphabetParameters(value, valid, subject);
}


namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
    export type Argument = AlphabetArgument;
}
export default Alphabet;
