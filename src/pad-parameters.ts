import {padStart} from 'lodash';
import PadPrefix from './pad-prefix-parameters';
import PadSuffix from './pad-suffix-parameters';


/**
 * @see padStart
 */

export default function PadParameters(
    value : string,
    length : number,
    circumfix : string,
) : string;

export default function PadParameters(
    value : string,
    length : number,
    prefix : string,
    suffix : string,
) : string;

export default function PadParameters(
    value : string,
    length : number,
    prefix : string,
    suffix ?: string,
) : string {

    value = PadPrefix(value, length, prefix);
    value = PadSuffix(value, length, suffix || prefix);

    return value;
}
