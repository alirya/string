import {PadPrefixParameters} from './pad-prefix.js';
import {PadSuffixParameters} from './pad-suffix.js';
import String from './string/string.js';
import Suffix from './suffix/suffix.js';
import Prefix from './prefix/prefix.js';
import Circumfix from './circumfix/circumfix.js';

export type PadArgumentPair = String & Prefix & Suffix & {length:number};
export type PadArgumentCircumfix = String  & Circumfix & {length:number};
export type PadArgument = PadArgumentPair | PadArgumentCircumfix;


/**
 * @see padStart
 */

export function PadParameters(
    value : string,
    length : number,
    circumfix : string,
) : string;

export function PadParameters(
    value : string,
    length : number,
    prefix : string,
    suffix : string,
) : string;

export function PadParameters(
    value : string,
    length : number,
    prefix : string,
    suffix ?: string,
) : string {

    value = PadPrefixParameters(value, length, prefix);
    value = PadSuffixParameters(value, length, suffix || prefix);

    return value;
}



export function PadParameter({string, length, prefix, suffix} : PadArgumentPair) : string;
export function PadParameter({string, length, circumfix} : PadArgumentCircumfix) : string;
export function PadParameter({string, length, prefix, suffix, circumfix} : PadArgumentPair & PadArgumentCircumfix) : string {

    return PadParameters(string, length, circumfix || prefix, circumfix || suffix);
}



namespace Pad {
    export const Parameters = PadParameters;
    export const Parameter = PadParameter;
    export type ArgumentPair = PadArgumentPair;
    export type ArgumentCircumfix = PadArgumentCircumfix;
    export type Argument = PadArgument;
}
export default Pad;
