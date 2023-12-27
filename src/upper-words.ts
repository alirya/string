import UpperFirst from './upper-first.js';
import Separator from './separator/separator.js';
import Value from '@axiona/value/value.js';

export function UpperWordsParameters (
    value : string,
    separator : string|RegExp
) : string {

    for (const split of value.match(separator) || []) {

        value = value.split(split).map(UpperFirst).join(split);
    }

    return UpperFirst(value);
}


export type UpperWordsArgument = Value<string> & Separator;

export function UpperWordsParameter ({value, separator} : UpperWordsArgument) : string {

    return UpperWordsParameters(value, separator);
}


namespace UpperWords {
    export const Parameters = UpperWordsParameters;
    export const Parameter = UpperWordsParameter;
    export type Argument = UpperWordsArgument;
}
export default UpperWords;
