/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export default function AlphanumericParameters(value, separator) {
    let list = value.split(separator);
    let length = list.length;
    let adds = [];
    for (let i = 1; i <= length; i++) {
        adds.push(list.slice(0, i).join(separator));
    }
    return adds;
}
//# sourceMappingURL=segment-parameters.js.map