import AlphanumericParameter, {AlphanumericArgument} from "./segment-parameter";
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

namespace Alphanumeric {

    export const Parameter = AlphanumericParameter;
    export const Parameters = AlphanumericParameters;
    export type Argument = AlphanumericArgument;
}
export default Alphanumeric;
