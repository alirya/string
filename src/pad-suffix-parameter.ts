import String from "./string/string";
import Suffix from "./suffix/suffix";
import PadSuffixParameter from "./pad-suffix-parameters";


export type PadSuffixArgument = String & Suffix & {length:number};

export default function PadSuffixObject({value, length , suffix} : PadSuffixArgument) {

    return PadSuffixParameter(value, length, suffix)
}


