import String from './string/string.js';
import Prefix from './prefix/prefix.js';
/**
 * prepend {@param prefix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param prefix
 */
export function PrefixParameters(value : string, prefix ?: string) : string {

    if(!value || !prefix) {

        return value;
    }

    prefix = prefix[0];

    if(value[0] !== prefix) {

        return prefix + value;
    }


    return value;

}


export type PrefixArgument = String & Prefix;

export function PrefixParameter({string, prefix} : PrefixArgument) : string {

    if(string.length !== 0) {

        prefix = prefix[0];

        if(string[0] !== prefix) {

            return prefix + string;
        }
    }

    return string;

}



namespace Prefix {
    export const Parameters = PrefixParameters;
    export const Parameter = PrefixParameter;
    export type Argument = PrefixArgument;
}
export default Prefix;
