import Guard from '../boolean/maximum.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import MaximumError from './throwable/maximum.js';
import Count from '../number/count.js';
import Value from '@alirya/value/value.js';
import MaximumNumber from '@alirya/number/maximum/maximum.js';
import Inclusive from '@alirya/number/inclusive/inclusive.js';

export function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, maximum:number, inclusive:boolean)=>Error = MaximumError.Parameters
) : asserts value is string {

    const guard = (value : string, maximum : number, inclusive : boolean) => {
        return Guard.Parameters(value, maximum, inclusive, converter);
    };

    CallbackParameters(value, guard, error, maximum, inclusive);
}


export type MaximumArgument = MaximumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MaximumNumber & Inclusive)=>Error
};

export function MaximumParameter(
    value, {
        maximum,
        inclusive,
        converter,
        error
    } : MaximumArgument) : asserts value is string {

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        converter,
        error ? (value, maximum, inclusive) => error({value, maximum, inclusive}) : error
    );
}



namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type Argument = MaximumArgument;
}
export default Maximum;
