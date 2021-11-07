import Suffix from "../suffix/suffix";
import SuffixParameter from "./suffix-parameter";
import SuffixParameters from "./suffix-parameters";
declare namespace Suffix {
    const Parameter: typeof SuffixParameter;
    const Parameters: typeof SuffixParameters;
}
export default Suffix;
