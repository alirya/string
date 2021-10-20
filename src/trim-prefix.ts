import {trimEnd, trimStart} from "lodash";
import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";

export default function TrimSuffix({string, prefix} : String & Partial<Prefix>) {

    return trimStart(string, prefix)
}
