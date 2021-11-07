import RemovePrefixParameters from "./remove-prefix-parameters";
import RemoveSuffixParameter, { RemoveSuffixArgument } from "./remove-suffix-parameter";
declare namespace RemovePrefixCharacter {
    const Parameters: typeof RemovePrefixParameters;
    const Parameter: typeof RemoveSuffixParameter;
    type Argument = RemoveSuffixArgument;
}
export default RemovePrefixCharacter;
