import {TruncateParameters} from '../../truncate.js';
import Validatable from '@alirya/validatable/validatable.js';
import Value from '@alirya/value/value.js';

export function EmptyParameters(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    const strings : string[] = [];
    strings.push(subject);


    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('empty', 'string');

    if(!valid && value.length) {

        strings[3] = 'string,';

        strings.push('actual', `"${TruncateParameters(value, 8)}"`);

    }

    return strings.join(' ') + '.';
}



export type EmptyArgument = Validatable & Value<string> & {subject?:string};

export function EmptyParameter({
    valid,
    value,
    subject = 'string',
} : EmptyArgument) : string {

    return EmptyParameters(value, valid, subject);
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
    export type Argument = EmptyArgument;
}
export default Empty;
