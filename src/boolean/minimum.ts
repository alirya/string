import {GreaterParameters} from '@alirya/number/boolean/greater';
import Count from '../number/count';
import Value from '@alirya/value/value';
import MinimumNumber from '@alirya/number/minimum/minimum';
import Inclusive from '@alirya/number/inclusive/inclusive';

/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */

export function MinimumParameters(
    string : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count
) : boolean {

    return GreaterParameters(converter(string), minimum, inclusive);
}


/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export function MinimumParameter({
    value,
    minimum,
    inclusive,
    converter = Count
} : Value<string> & MinimumNumber & Inclusive & {converter : (value:string)=>number}) : boolean {

    return MinimumParameters(value, minimum, inclusive, converter);
}



namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
}
export default Minimum;
