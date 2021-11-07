import Separator from "./separator/separator";
import Value from "@dikac/t-value/value";
export declare type UpperWordsArgument = Value<string> & Separator;
export default function UpperWordsParameter({ value, separator }: UpperWordsArgument): string;
