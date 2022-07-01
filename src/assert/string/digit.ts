import Match from '../../value/match';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';

export function DigitParameters(
    value : string,
    valid : boolean,
    subject : string = 'string'
) : string {

    const strings: string[] = [];
    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('digit');

    if(!valid) {

        let match = new Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            strings[2] = 'digit,';

            strings.push('contains', `"${match.match[0]}"`);
        }
    }

    return strings.join(' ') + '.';
}

export type DigitArgument = Validatable & Value<string> & {subject?:string};

export function DigitParameter({
    valid,
    value,
    subject = 'string'
} : DigitArgument) : string {

    return DigitParameters(value, valid, subject);
}


namespace Digit {
    export const Parameters = DigitParameters;
    export type Argument = DigitArgument;
    export const Parameter = DigitParameter;
}
export default Digit;
