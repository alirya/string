import startsWith from 'lodash/startsWith.js';

/**
 * @see startsWith
 * @param value
 * @param prefix
 */

export function PrefixParameters(value : string, prefix : string) : boolean {

    return startsWith(value, prefix);
}



/**
 * @see startsWith
 * @param value
 * @param prefix
 */
export function PrefixParameter({
    value,
    prefix
} : {value: string, prefix: string}) : boolean {

    return PrefixParameters(value, prefix);
}



namespace Prefix {
    export const Parameters = PrefixParameters;
    export const Parameter = PrefixParameter;
}
export default Prefix;
