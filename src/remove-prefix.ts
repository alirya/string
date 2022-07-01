import String from './string/string';
import Prefix from './prefix/prefix';
/**
 * remove {@param prefix} at the start of {@param value}
 */
export function RemovePrefixParameters(
    value : string,
    prefix ?: string
) : string {

    if(!value || !prefix) {

        return value;
    }

    if(value.slice(0, prefix.length) === prefix) {

        return value.slice(prefix.length);
    }

    return value;
}


export type RemovePrefixArgument = String & Partial<Prefix>;

/**
 * remove {@param prefix} at the start of {@param value}
 */
export function RemovePrefixParameter(
    {
        string,
        prefix
    } : RemovePrefixArgument
) : string {

    return RemovePrefixParameters(string, prefix);
}



namespace RemovePrefix {
    export const Parameters = RemovePrefixParameters;
    export const Parameter = RemovePrefixParameter;
}
export default RemovePrefix;
