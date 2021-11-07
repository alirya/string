/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */

export default function SuffixParameters(value : string, suffix ?: string) : string {

    if(!suffix) {

        return value;
    }

    if(!value) {

        return value;
    }

    suffix = suffix[0];

    if(value[value.length - 1] !== suffix) {

        return value + suffix;
    }


    return value;
}
