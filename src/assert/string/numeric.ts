import Match from '../../value/match.js';
import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';
import SafeCast from '../../safe-cast.js';

export function NumericParameters(
    value : unknown,
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

    strings.push('numeric');

    if(!valid) {

        const match = new Match(SafeCast(value), /[^0-9]{1,5}/);

        if(match.valid) {

            strings[2] = 'numeric,';

            strings.push(`contain`, `"${match.match[0]}"`);
        }
    }

    return strings.join(' ') + '.';
}


export type NumericArgument = Validatable & Value<number|string> & {subject?:string};

export function NumericParameter({
    valid,
    value,
    subject
} : NumericArgument) : string {

    return NumericParameters(value, valid, subject);
}



namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
    export type Argument = NumericArgument;
}
export default Numeric;
