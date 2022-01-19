import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";
import PadParameters from "./pad-parameters";

export type PadArgumentPair = String & Prefix & Suffix & {length:number};
export type PadArgumentCircumfix = String  & Circumfix & {length:number};

export default function PadParameter({string, length, prefix, suffix} : PadArgumentPair) : string;
export default function PadParameter({string, length, circumfix} : PadArgumentCircumfix) : string;
export default function PadParameter({string, length, prefix, suffix, circumfix} : PadArgumentPair & PadArgumentCircumfix) : string {

    return PadParameters(string, length, circumfix || prefix, circumfix || suffix)
}

