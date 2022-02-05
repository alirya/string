import padStart from 'lodash/padStart';

/**
 * @see padStart
 */

export default function PadPrefixParameters(value : string, length : number, prefix : string) : string {

    return padStart(value, length, prefix);
}


