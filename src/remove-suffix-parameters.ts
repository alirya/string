/**
 * remove {@param suffix} at the end of {@param value}
 */
export default function RemoveSuffixParameters(value : string, suffix ?: string) : string {

    if(!value || !suffix) {

        return value;
    }

    if(value.slice(-suffix.length) === suffix) {

        return value.slice(0, -suffix.length);
    }

    return value;
}
