import MaximumType from '../string/maximum.js';
import Count from '../../number/count.js';
import {MaximumArgument} from '../string/maximum.js';

export function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : Error {

    return new Error(MaximumType.Parameters(value, false, maximum, inclusive, converter, criteria, subject));
}

export {MaximumArgument};

export function MaximumParameter({
    string,
    maximum,
    inclusive,
    subject,
    criteria,
    converter
} : MaximumArgument) : Error {

    return MaximumParameters(string, maximum, inclusive, converter, criteria, subject);
}


namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type Argument = MaximumArgument;
}
export default Maximum;
