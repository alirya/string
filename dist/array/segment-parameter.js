import AlphanumericParameters from "./segment-parameters";
/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export default function AlphanumericParameter({ value, separator }) {
    return AlphanumericParameters(value, separator);
}
//# sourceMappingURL=segment-parameter.js.map