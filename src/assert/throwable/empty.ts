import EmptyType from '../string/empty.js';
import Value from '@axiona/value/value.js';

export function EmptyParameters(
    value : string,
    subject  = 'string'
) : Error {

    return new Error(EmptyType.Parameters(value, false, subject));
}

export type EmptyArgument = Value<string> & { subject?: string };

export function EmptyParameter({
    value,
    subject
} : EmptyArgument) : Error {

    return EmptyParameters(value, subject);
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
    export type Argument = EmptyArgument;
}
export default Empty;
