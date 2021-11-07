import RemoveSuffixParameters from "./remove-suffix-parameters";
import RemoveSuffixParameter, { RemoveSuffixArgument } from "./remove-suffix-parameter";
declare namespace RemoveSuffix {
    const Parameter: typeof RemoveSuffixParameters;
    const Parameters: typeof RemoveSuffixParameter;
    type Argument = RemoveSuffixArgument;
}
export default RemoveSuffix;
