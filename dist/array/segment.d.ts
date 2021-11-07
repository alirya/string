import AlphanumericParameter, { AlphanumericArgument } from "./segment-parameter";
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
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Parameters: typeof AlphanumericParameters;
    type Argument = AlphanumericArgument;
}
export default Alphanumeric;
