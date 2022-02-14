import String from './string/string';
import Suffix from './suffix/suffix';
import RemoveSuffixParameters from './remove-suffix-parameters';

export type RemoveSuffixArgument = String & Partial<Suffix>;

/**
 * remove {@param suffix} at the end of {@param value}
 */
export default function RemoveSuffixParameter({string, suffix} : RemoveSuffixArgument) : string {

    return RemoveSuffixParameters(string, suffix);

}
