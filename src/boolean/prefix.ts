import {startsWith} from "lodash";
import Prefix from "../prefix/prefix";
import PrefixParameter from "./prefix-parameter";
import PrefixParameters from "./prefix-parameters";
/**
 * @see startsWith
 * @param value
 * @param prefix
 */
namespace Prefix {

    export const Parameters = PrefixParameters;
    export const Parameter = PrefixParameter;
}

export default Prefix;
