import UpperFirst from './upper-first';
import Separator from "./separator/separator";
import String from "./string/string";
import Value from "@dikac/t-value/value";


namespace UpperWords {

    export const Parameter = UpperWordsParameter;
    export const Object = UpperWordsObject;
    export type Argument = UpperWordsArgument;
}


export function UpperWordsObject ({value, separator} : UpperWordsArgument) : string {

    return UpperWordsParameter(value, separator);
}

export type UpperWordsArgument = Value<string> & Separator;

export function UpperWordsParameter (
    value : string,
    separator : string|RegExp
) : string {

    for (const split of value.match(separator) || []) {

        value = value.split(split).map(UpperFirst).join(split);
    }

    return UpperFirst(value);
}

export default UpperWords;
