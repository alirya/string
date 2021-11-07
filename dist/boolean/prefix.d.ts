import Prefix from "../prefix/prefix";
import PrefixParameter from "./prefix-parameter";
import PrefixParameters from "./prefix-parameters";
/**
 * @see startsWith
 * @param value
 * @param prefix
 */
declare namespace Prefix {
    const Parameters: typeof PrefixParameters;
    const Parameter: typeof PrefixParameter;
}
export default Prefix;
