import AlphabetParameter, { AlphabetArgument } from "./alphabet-parameter";
import AlphabetParameters from "./alphabet-parameters";
declare namespace Alphabet {
    const Parameter: typeof AlphabetParameter;
    const Parameters: typeof AlphabetParameters;
    type Argument = AlphabetArgument;
}
export default Alphabet;
