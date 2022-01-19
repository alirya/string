import Prefix from "./prefix/prefix";
import String from "./string/string";
import TrimPrefixParameters from "./trim-prefix-parameters";

export type TrimPrefixArgument = String & Partial<Prefix>;

export default function TrimPrefixParameter({string, prefix} : TrimPrefixArgument) {

    return TrimPrefixParameters(string, prefix)
}

