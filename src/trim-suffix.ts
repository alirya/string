import {trimEnd} from "lodash";
import Suffix from "./suffix/suffix";
import String from "./string/string";


export default function TrimSuffix({string, suffix} : String & Partial<Suffix>) {

    return trimEnd(string, suffix)
}
