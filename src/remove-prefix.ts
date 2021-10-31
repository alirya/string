import String from "./string/string";
import Prefix from "./prefix/prefix";

namespace RemovePrefixCharacter {

    export const Parameter = RemovePrefixCharacterParameter;
    export const Object = RemovePrefixCharacterObject;
    export type Argument = RemovePrefixCharacterArgument;
}


/**
 * remove {@param prefix} at the start of {@param value}
 */
export function RemovePrefixCharacterParameter(value : string, prefix ?: string) : string {

    if(!value) {

        return value;
    }

    if(!prefix) {

        return value;
    }

    prefix = prefix[0];

    if(value.slice(0, prefix.length) === prefix) {

        return value.slice(prefix.length);
    }

    return value;

}

export type RemovePrefixCharacterArgument = String & Prefix;

export function RemovePrefixCharacterObject({value, prefix} : String & Prefix) : string {

    return RemovePrefixCharacterParameter(value, prefix);
}

export default RemovePrefixCharacter;
