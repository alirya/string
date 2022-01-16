import {startsWith} from 'lodash';

/**
 * @see startsWith
 * @param value
 * @param prefix
 */

export default function PrefixParameters(value : string, prefix : string) : boolean {

    return startsWith(value, prefix);
}

