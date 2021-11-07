import Prefix from "./prefix/prefix";
import PrefixParameters from "./prefix-parameters";
import PrefixParameter, {PrefixArgument} from "./prefix-parameter";

namespace Prefix {

    export const Parameters = PrefixParameters;
    export const Parameter = PrefixParameter;
    export type Argument = PrefixArgument;
}

export default Prefix;
