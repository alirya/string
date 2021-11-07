import PadPrefixParameter, { PadPrefixArgument } from "./pad-prefix-parameter";
import PadPrefixParameters from "./pad-prefix-parameters";
declare namespace PadPrefix {
    const Parameter: typeof PadPrefixParameter;
    const Parameters: typeof PadPrefixParameters;
    type Argument = PadPrefixArgument;
}
export default PadPrefix;
