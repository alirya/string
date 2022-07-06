import Count from '../../number/count.js';
import Validatable from '@alirya/validatable/validatable.js';
import String from '../../string/string.js';
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import MaximumNumber from '@alirya/number/maximum/maximum.js';

export function MaximumParameters(
    value : string,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, criteria);


    if(valid) {

        strings.push('is lower');

    } else {

        strings.push('must lower');
    }

    if(inclusive) {

        strings.push('or equal');
    }

    strings.push('than', maximum.toString() + (valid ? '' : ','));

    if(!valid) {

        strings.push(`actual`, criteria, converter(value).toString());

    }

    return strings.join(' ') + '.';
}


export type MaximumArgument = Validatable & String & MaximumNumber & Inclusive & {
    subject ?: string,
    converter ?: (value:string)=>number,
    criteria ?: string,
};

export function MaximumParameter({
    valid,
    string,
    maximum,
    inclusive,
    converter,
    criteria,
    subject,
} : MaximumArgument) : string {

    return MaximumParameters(string, valid, maximum, inclusive, converter, criteria, subject);
}



namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type Argument = MaximumArgument;
}
export default Maximum;
