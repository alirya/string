import MinimumType from '../string/minimum';
import Count from '../../number/count';
import {MinimumArgument, MinimumArgumentString, MinimumArgumentValue} from '../string/minimum';

export function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : Error {

    return new Error(MinimumType.Parameters(value, false, minimum, inclusive, converter, criteria, subject));
}


export {MinimumArgument, MinimumArgumentString, MinimumArgumentValue};

export function MinimumParameter({
    value,
    minimum,
    inclusive,
    converter,
    criteria,
    subject,
} : MinimumArgumentValue);

export function MinimumParameter({
    string,
    minimum,
    inclusive,
    converter,
    criteria,
    subject,
} : MinimumArgumentString);

export function MinimumParameter({
    string,
    value,
    minimum,
    inclusive,
    converter,
    criteria,
    subject,
} : MinimumArgumentValue & MinimumArgumentString) : Error {

    return MinimumParameters(string || value, minimum, inclusive, converter, criteria, subject);
}


namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
    export type ArgumentString = MinimumArgumentString;
    export type ArgumentValue = MinimumArgumentValue;
    export type Argument = MinimumArgument;
}
export default Minimum;
