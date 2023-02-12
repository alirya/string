import Suffix from './suffix/suffix.js';
import String from './string/string.js';
/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */

export function SuffixParameters(value : string, suffix ?: string) : string {

    if(!suffix) {

        return value;
    }

    if(!value) {

        return value;
    }

    suffix = suffix[0];

    if(value[value.length - 1] !== suffix) {

        return value + suffix;
    }


    return value;
}


export type SuffixArgument = String & Suffix;

/**
 * append {@param suffix} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param suffix
 */


export function SuffixParameter({string, suffix} : SuffixArgument) : string {

    return SuffixParameters(string, suffix);
}




namespace Suffix {
    export const Parameters = SuffixParameters;
    export const Parameter = SuffixParameter;
    export type Argument = SuffixArgument;
}
export default Suffix;
