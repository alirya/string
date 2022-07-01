import padStart from 'lodash/padStart';
import String from './string/string';
import Prefix from './prefix/prefix';

/**
 * @see padStart
 */

export function PadPrefixParameters(value : string, length : number, prefix : string) : string {

    return padStart(value, length, prefix);
}

export type PadPrefixArgument = String & Prefix & {length:number};

export function PadPrefixParameter({string, length , prefix} : PadPrefixArgument) {

    return PadPrefixParameters(string, length, prefix);
}

namespace PadPrefix {
    export const Parameters = PadPrefixParameters;
    export const Parameter = PadPrefixParameter;
}
export default PadPrefix;
