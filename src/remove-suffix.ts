import String from "./string/string";
import Suffix from "./suffix/suffix";

namespace RemoveSuffix {

    export const Parameter = RemoveSuffixParameter;
    export const Object = RemoveSuffixObject;
    export type Argument = RemoveSuffixArgument;
}


/**
 * remove {@param suffix} at the end of {@param value}
 */
export function RemoveSuffixParameter(value : string, suffix ?: string) : string {

    if(!value) {

        return value;
    }

    if(!suffix) {

        return value;
    }

    if(value.slice(-value.length) === suffix) {

        return value.slice(0, -value.length);
    }

    return value;

}

export type RemoveSuffixArgument = String & Partial<Suffix>;

export function RemoveSuffixObject({value, suffix} : RemoveSuffixArgument) : string {

    return RemoveSuffixParameter(value, suffix);

}

export default RemoveSuffix;
