import Suffix from "./suffix/suffix";
import String from "./string/string";
import TrimSuffixParameters from "./trim-suffix-parameters";

export type TrimSuffixArgument = String & Partial<Suffix>;

export default function TrimSuffixParameter({string, suffix} : TrimSuffixArgument) {

    return TrimSuffixParameters(string, suffix)
}


