import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";

namespace Prefix {

    export const Parameter = PrefixParameter;
    export const Object = PrefixObject;
    export type Argument = PrefixArgument;
}


/**
 * prepend {@param prefix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param prefix
 */
export function PrefixParameter(value : string, prefix ?: string) : string {

    if(!value) {

        return value;
    }

    if(!prefix) {

        return value;
    }
    prefix = prefix[0];

    if(value[0] !== prefix) {

        return prefix + value;
    }


    return value;

}
export type PrefixArgument = String & Prefix;

export function PrefixObject({value, prefix} : String & Prefix) : string {

    if(value.length !== 0) {

        prefix = prefix[0];

        if(value[0] !== prefix) {

            return prefix + value;
        }
    }

    return value;

}

export default Prefix;
