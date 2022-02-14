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
    string : string,
    separator : string
) : string[] {

    const list = string.split(separator);
    const length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join(separator));
    }

    return adds;
}
