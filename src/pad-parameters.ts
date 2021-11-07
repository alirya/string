import {padStart} from "lodash";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";


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

    value = PadPrefix.Parameters(value, length, prefix);
    value = PadSuffix.Parameters(value, length, suffix || prefix);

    return value;
}
