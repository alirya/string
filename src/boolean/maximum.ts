import {LowerParameters} from '@alirya/number/boolean/lower';
import Count from '../number/count';
import MaximumNumber from '@alirya/number/maximum/maximum';
import Value from '@alirya/value/value';
import Inclusive from '@alirya/number/inclusive/inclusive';

/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */

export function MaximumParameters(
    string : string,
    maximum : number,
    inclusive : boolean = true,
    converter : (value:string)=>number = Count
) : boolean {

    return LowerParameters(converter(string), maximum, inclusive);
}


export type MaximumArgument = Value<string> & MaximumNumber & Partial<Inclusive & {converter : (value:string)=>number}>;
/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export function MaximumParameter({
    value,
    maximum,
    inclusive,
    converter = Count
} : MaximumArgument) : boolean {

    return MaximumParameters(value, maximum, inclusive, converter);
}




namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type Argument = MaximumArgument;
}
export default Maximum;
