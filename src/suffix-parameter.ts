import Suffix from './suffix/suffix';
import String from './string/string';
import SuffixParameters from './suffix-parameters';

export type SuffixArgument = String & Suffix;

/**
 * append {@param suffix} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param suffix
 */


export default function SuffixParameter({string, suffix} : SuffixArgument) : string {

    return SuffixParameters(string, suffix);
}


