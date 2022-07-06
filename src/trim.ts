import trim from 'lodash/trim.js';
import {TrimSuffixParameters} from './trim-suffix.js';
import {TrimPrefixParameters} from './trim-prefix.js';

export function TrimParameters(
    value: string,
    prefix: string,
    suffix: string,
) : string;

export function TrimParameters(
    value: string,
    circumfix: string
) : string;

export function TrimParameters(
    value: string,
) : string;

export function TrimParameters(
    value: string,
    prefix?: string,
    suffix?: string,
) : string {

    if(suffix) {

        value = TrimPrefixParameters(value, prefix);
        value = TrimSuffixParameters(value, suffix);

    } else {

        value = trim(value, prefix);
    }

    return value;
}


import String from './string/string.js';
import Suffix from './suffix/suffix.js';
import Circumfix from './circumfix/circumfix.js';
import Prefix from './prefix/prefix.js';

export type TrimArgumentCircumfix = String & Circumfix;
export type TrimArgumentPair = String & Prefix & Suffix;

export function TrimParameter({string} : String);
export function TrimParameter({string, circumfix} : TrimArgumentCircumfix);
export function TrimParameter({string, prefix, suffix} : TrimArgumentPair);
export function TrimParameter({string, circumfix, prefix, suffix} : TrimArgumentPair & TrimArgumentCircumfix) {

    return TrimParameters(string, circumfix || prefix, suffix);
}



namespace Trim {
    export const Parameters = TrimParameters;
    export const Parameter = TrimParameter;
}
export default Trim;
