import Prefix from "./prefix/prefix";
import PrefixParameters from "./prefix-parameters";
import PrefixParameter, { PrefixArgument } from "./prefix-parameter";
declare namespace Prefix {
    const Parameters: typeof PrefixParameters;
    const Parameter: typeof PrefixParameter;
    type Argument = PrefixArgument;
}
export default Prefix;
