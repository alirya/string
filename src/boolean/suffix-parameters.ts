import {endsWith} from "lodash";


export default function SuffixParameters(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);
}
