import SuffixParameter, { SuffixArgument } from "./suffix-parameter";
import SuffixParameters from "./suffix-parameters";
declare namespace Suffix {
    const Parameter: typeof SuffixParameter;
    const Parameters: typeof SuffixParameters;
    type Argument = SuffixArgument;
}
export default Suffix;
