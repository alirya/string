import {endsWith} from "lodash";

export default function SuffixParameter(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);
}
