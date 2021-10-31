import String from "../string/string";
import Separator from "../separator/separator";

/**
 * split {@param string} to its each segment marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Segment('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export default function Segment({
    value,
    separator
} : String & Separator) : string[] {

    let list = value.split(separator);
    let length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join(separator));
    }

    return adds;
}
