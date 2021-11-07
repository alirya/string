import Value from "@dikac/t-value/value";
import AlphabetParameter from "./alphabet-parameters";
import AlphabetParameters from "./alphabet-parameters";

export type AlphabetArgument = Value<string> & {subject ?: string};

namespace Alphabet {

    export const Parameter = AlphabetParameter;
    export const Object = AlphabetParameters;
    export type Argument = AlphabetArgument;
}

export default Alphabet;
