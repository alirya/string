import Separator from "./separator/separator";
import Value from "@dikac/t-value/value";
import UpperWordsParameters from "./upper-words-parameters";

export type UpperWordsArgument = Value<string> & Separator;

export default function UpperWordsParameter ({value, separator} : UpperWordsArgument) : string {

    return UpperWordsParameters(value, separator);
}



