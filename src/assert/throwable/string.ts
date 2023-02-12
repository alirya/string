import StringType from '../string/string.js';
import Value from '@alirya/value/value.js';

export function StringParameters(
    value : unknown,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new TypeError(StringType.Parameters(value, false, subject, conversion));
}

export type StringArgument =
    Value<unknown> &
    {subject ?: string} &
    {conversion ?: (value:unknown)=>string};

export function StringParameter({
    value,
    subject,
    conversion
} : StringArgument) : Error {

    return StringParameters(value, subject, conversion);
}



namespace String {
    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
    export type Argument = StringArgument;
}
export default String;
