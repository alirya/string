import Greater from "@alirya/number/boolean/greater-parameters"
import Count from "../number/count";

/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */

export default function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count
) : boolean {

    return Greater(converter(value), minimum, inclusive)
}
