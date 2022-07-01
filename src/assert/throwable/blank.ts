import BlankType from '../string/blank';
import Value from '@alirya/value/value';

export function BlankParameters(
    value : string,
    subject ?: string
) : Error {

    return new Error(BlankType.Parameters(false, value, subject));

}


export type BlankArgument = Value<string> & {subject ?: string};

export function BlankParameter({
    value,
    subject = 'string'
} : BlankArgument) : Error {

    return BlankParameters(value, subject);
}


namespace Blank {
    export const Parameters = BlankParameters;
    export const Parameter = BlankParameter;
    export type Argument = BlankArgument;
}
export default Blank;
