import TrimSuffixParameters from "./trim-suffix-parameters";
import TrimPrefixParameter, {TrimPrefixArgument} from "./trim-prefix-parameter";

namespace TrimPrefix {

    export const Parameters = TrimSuffixParameters;
    export const Parameter = TrimPrefixParameter;
    export type Argument = TrimPrefixArgument;
}

export default TrimPrefix;
