import {TruncateParameters} from '../../truncate.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';

export function BlankParameters(
    valid : boolean,
    value : string,
    subject  = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('expect');

    }

    strings.push('blank string');


    if(!valid) {

        strings.push(`, actual "${TruncateParameters(value, 8)}"`);
    }

    return strings.join(' ') + '.';
}


export type BlankArgument = Validatable & Value<string> & {subject ?: string };

export function BlankParameter({
    valid,
    value,
    subject = 'string',
} : BlankArgument) : string {

    return BlankParameters(valid, value, subject);
}


namespace Blank {
    export const Parameters = BlankParameters;
    export const Parameter = BlankParameter;
    export type Argument = BlankArgument;
}
export default Blank;
