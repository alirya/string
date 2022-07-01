import Guard from '../boolean/minimum';
import Callback from '@alirya/function/assert/callback';
import MinimumError from './throwable/minimum';
import Count from '../number/count';
import Value from '@alirya/value/value';
import MinimumNumber from '@alirya/number/minimum/minimum';
import Inclusive from '@alirya/number/inclusive/inclusive';


export function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, minimum:number, inclusive:boolean)=>Error = MinimumError.Parameters
) : asserts value is string {

    let guard = (value : string, minimum : number, inclusive : boolean) => {
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
