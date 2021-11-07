import String from "./string/string";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import Prefix from "./prefix/prefix";
export declare type TrimParameterArgumentCircumfix = String & Circumfix;
export declare type TrimParameterArgumentPair = String & Prefix & Suffix;
export default function TrimParameter({ value, circumfix }: TrimParameterArgumentCircumfix): any;
export default function TrimParameter({ value, prefix, suffix }: TrimParameterArgumentPair): any;
