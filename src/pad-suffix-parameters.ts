import {padEnd} from "lodash";

/**
 * @see padEnd
 */

export default function PadSuffixParameters (string : string, length : number, suffix : string) : string {

    return padEnd(string, length, suffix);
}

