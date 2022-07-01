import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';

export function StringParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('string');

    if(!valid) {

        strings[2] = 'string,';

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}


export type StringArgument = Validatable & Value & {subject ?:string} & {conversion ?: (value: unknown) => string };

export function StringParameter({
   valid,
   value,
   subject = 'type',
   conversion = value => typeof value
} : StringArgument) : string {

    return StringParameters(value, valid, subject, conversion);
}


namespace String {
    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
    export type Argument = StringArgument;
}
export default String;
