import EmptyType from '../string/empty';
import Value from '@alirya/value/value';

export function EmptyParameters(
    value : string,
    subject : string = 'string'
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
