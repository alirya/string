import String from "./string/string";
import Suffix from "./suffix/suffix";
import Value from "@dikac/t-value/value";

namespace Suffix {

    export const Parameter = SuffixParameter;
    export const Object = SuffixObject;
    export type Argument = SuffixArgument;
}

/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */

export function SuffixParameter(value : string, suffix ?: string) : string {

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

export type SuffixArgument = Value<string> & Partial<Suffix>;

export function SuffixObject({value, suffix} : SuffixArgument) : string {


    return SuffixParameter(value, suffix);
}

export default Suffix;
