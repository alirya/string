import PadSuffixParameter from "./pad-suffix-parameters";
import { PadSuffixArgument } from "./pad-suffix-parameter";
declare namespace PadSuffix {
    const Parameter: typeof PadSuffixParameter;
    const Parameters: typeof PadSuffixParameter;
    type Argument = PadSuffixArgument;
}
export default PadSuffix;
