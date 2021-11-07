/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */

export default function AlphanumericParameters(
    value : string,
    separator : string
) : string[] {

    let list = value.split(separator);
    let length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join(separator));
    }

    return adds;
}
