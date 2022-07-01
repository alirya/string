import Guard from '../boolean/maximum';
import {CallbackParameters} from '@alirya/function/assert/callback';
import MaximumError from './throwable/maximum';
import Count from '../number/count';
import Value from '@alirya/value/value';
import MaximumNumber from '@alirya/number/maximum/maximum';
import Inclusive from '@alirya/number/inclusive/inclusive';

export function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, maximum:number, inclusive:boolean)=>Error = MaximumError.Parameters
) : asserts value is string {

    let guard = (value : string, maximum : number, inclusive : boolean) => {
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
