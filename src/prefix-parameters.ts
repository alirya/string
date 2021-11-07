/**
 * prepend {@param prefix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param prefix
 */
export default function PrefixParameters(value : string, prefix ?: string) : string {

    if(!value) {

        return value;
    }

    if(!prefix) {

        return value;
    }
    prefix = prefix[0];

    if(value[0] !== prefix) {

        return prefix + value;
    }


    return value;

}
