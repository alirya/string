/**
 * remove {@param prefix} at the start of {@param value}
 */
export default function RemovePrefixParameters(value : string, prefix ?: string) : string {

    if(!value || !prefix) {

        return value;
    }

    if(value.slice(0, prefix.length) === prefix) {

        return value.slice(prefix.length);
    }

    return value;
}
