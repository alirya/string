import padEnd from 'lodash/padEnd';

/**
 * @see padEnd
 */

export default function PadSuffixParameters (string : string, length : number, suffix : string) : string {

    return padEnd(string, length, suffix);
}

