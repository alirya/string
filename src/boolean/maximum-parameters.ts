import Lower from '@alirya/number/boolean/lower-parameters';
import Count from '../number/count';

/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */

export default function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean = true,
    converter : (value:string)=>number = Count
) : boolean {

    return Lower(converter(value), maximum, inclusive);
}


