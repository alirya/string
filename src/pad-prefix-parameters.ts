import {padStart} from "lodash";

/**
 * @see padStart
 */

export default function PadPrefixParameters(value : string, length : number, prefix : string) : string {

    return padStart(value, length, prefix)
}


