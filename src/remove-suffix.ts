import String from './string/string';
import Suffix from './suffix/suffix';
/**
 * remove {@param suffix} at the end of {@param value}
 */
export function RemoveSuffixParameters(value : string, suffix ?: string) : string {

    if(!value || !suffix) {

        return value;
    }

    if(value.slice(-suffix.length) === suffix) {

        return value.slice(0, -suffix.length);
    }

    return value;
}


export type RemoveSuffixArgument = String & Partial<Suffix>;

/**
 * remove {@param suffix} at the end of {@param value}
 */
export function RemoveSuffixParameter({string, suffix} : RemoveSuffixArgument) : string {

    return RemoveSuffixParameters(string, suffix);

}


namespace RemoveSuffix {
    export const Parameters = RemoveSuffixParameters;
    export const Parameter = RemoveSuffixParameter;
}
export default RemoveSuffix;
