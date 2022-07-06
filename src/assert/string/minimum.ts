import Count from '../../number/count.js';
import String from '../../string/string.js';
import Validatable from '@alirya/validatable/validatable.js';
import MinimumNumber from '@alirya/number/minimum/minimum.js';
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import Value from '@alirya/value/value.js';

export function MinimumParameters(
    value : string,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, 'length');

    if(valid) {

        strings.push(`is greater`);

    } else {

        strings.push(`must greater`);
    }

    if(inclusive) {

        strings.push(`or equal`);
    }

    strings.push('than', minimum.toString() + (valid ? '' : ','));

    if(!valid) {

        strings.push(`actual`, criteria, converter(value).toString());

    }

    return strings.join(' ') + '.';
}



export type MinimumArgumentString = Validatable & String & MinimumNumber & Inclusive & {
    converter ?: (value:string)=>number,
    criteria ?: string,
    subject ?: string
};

export type MinimumArgumentValue = Validatable & Value<string> & MinimumNumber & Inclusive & {
    converter ?: (value:string)=>number,
    criteria ?: string,
    subject ?: string
};

export type MinimumArgument = MinimumArgumentString | MinimumArgumentValue;

export function MinimumParameter(
    {
        value,
        valid,
        minimum,
        inclusive,
        subject,
        converter,
        criteria,
} : MinimumArgumentValue) : string;

export function MinimumParameter(
    {
        string,
        valid,
        minimum,
        inclusive,
        subject,
        converter,
        criteria,
} : MinimumArgumentString) : string;

export function MinimumParameter(
    {
        string,
        value,
        valid,
        minimum,
        inclusive,
        subject,
        converter,
        criteria,
} : MinimumArgumentString & MinimumArgumentValue) : string {

    return MinimumParameters(string || value, valid, minimum, inclusive, converter, criteria, subject);
}



namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
    export type ArgumentString = MinimumArgumentString;
    export type ArgumentValue = MinimumArgumentValue;
    export type Argument = MinimumArgument;
}
export default Minimum;
