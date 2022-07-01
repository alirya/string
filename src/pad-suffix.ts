import padEnd from 'lodash/padEnd';
import String from './string/string';
import Suffix from './suffix/suffix';

/**
 * @see padEnd
 */

export function PadSuffixParameters (string : string, length : number, suffix : string) : string {

    return padEnd(string, length, suffix);
}


export type PadSuffixArgument = String & Suffix & {length:number};

export function PadSuffixParameter({string, length , suffix} : PadSuffixArgument) {

    return PadSuffixParameters(string, length, suffix);
}


namespace PadSuffix {
    export const Parameters = PadSuffixParameters;
    export const Parameter = PadSuffixParameter;
}
export default PadSuffix;
