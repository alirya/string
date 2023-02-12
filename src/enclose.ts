import {PrefixParameters} from './prefix.js';
import {SuffixParameters} from './suffix.js';
import Prefix from './prefix/prefix.js';
import Suffix from './suffix/suffix.js';
import String from './string/string.js';
import Circumfix from './circumfix/circumfix.js';

export function EncloseParameters (
    string : string,
    circumfix : string,
)  : string ;

export function EncloseParameters (
    string : string,
    prefix : string,
    suffix : string,
)  : string;

export function EncloseParameters (
    string : string,
    prefix : string,
    suffix ?: string,
) : string {

    string = PrefixParameters(string, prefix);
    string = SuffixParameters(string, suffix || prefix);

    return string;
}


export type EncloseArgumentPair = String & Prefix & Suffix;
export type EncloseArgumentCircumfix = String & Circumfix;
export type EncloseArgument = EncloseArgumentPair | EncloseArgumentCircumfix;

/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export function EncloseParameter ({
    string,
    prefix,
    suffix,
} : EncloseArgumentPair) : string ;

export function EncloseParameter ({
    string,
    circumfix,
} : EncloseArgumentCircumfix) : string ;

export function EncloseParameter ({
    string,
    prefix,
    circumfix,
    suffix,
} : EncloseArgumentCircumfix & EncloseArgumentPair) : string {

    return EncloseParameters(string, prefix || circumfix, suffix);
}


namespace Enclose {
    export const Parameters = EncloseParameters;
    export const Parameter = EncloseParameter;
    export type ArgumentPair = EncloseArgumentPair;
    export type ArgumentCircumfix = EncloseArgumentCircumfix;
    export type Argument = EncloseArgument;
}
export default Enclose;
