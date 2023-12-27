import Guard from '../boolean/minimum.js';
import Callback from '@axiona/function/assert/callback.js';
import MinimumError from './throwable/minimum.js';
import Count from '../number/count.js';
import Value from '@axiona/value/value.js';
import MinimumNumber from '@axiona/number/minimum/minimum.js';
import Inclusive from '@axiona/number/inclusive/inclusive.js';


export function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, minimum:number, inclusive:boolean)=>Error = MinimumError.Parameters
) : asserts value is string {

    const guard = (value : string, minimum : number, inclusive : boolean) => {
        return Guard.Parameters(value, minimum, inclusive, converter);
    };

    Callback.Parameters(value, guard, error, minimum, inclusive);
}


export type MinimumArgument = MinimumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MinimumNumber & Inclusive)=>Error
};

export function MinimumParameter(
    value, {
        minimum,
        inclusive,
        converter,
        error
    } : MinimumArgument) : asserts value is string {

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        converter,
        error ? (value, minimum, inclusive) => error({value, minimum, inclusive}) : error
    );
}




namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
    export type Argument = MinimumArgument;
}
export default Minimum;
