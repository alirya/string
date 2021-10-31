import Separator from "./separator/separator";
import Value from "@dikac/t-value/value";
declare namespace UpperWords {
    const Parameter: typeof UpperWordsParameter;
    const Object: typeof UpperWordsObject;
    type Argument = UpperWordsArgument;
}
export declare function UpperWordsObject({ value, separator }: UpperWordsArgument): string;
export declare type UpperWordsArgument = Value<string> & Separator;
export declare function UpperWordsParameter(value: string, separator: string | RegExp): string;
export default UpperWords;
