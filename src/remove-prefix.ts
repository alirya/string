import RemovePrefixParameters from "./remove-prefix-parameters";
import RemoveSuffixParameter, {RemoveSuffixArgument} from "./remove-suffix-parameter";

namespace RemovePrefixCharacter {

    export const Parameters = RemovePrefixParameters;
    export const Parameter = RemoveSuffixParameter;
    export type Argument = RemoveSuffixArgument;
}

export default RemovePrefixCharacter;
