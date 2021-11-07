import AlphabetParameter from "./alphabet-parameter";
import AlphabetVoid from "./alphabet-void";
import AlphabetParameters from "./alphabet-parameters";
declare namespace Alphabet {
    const Void: typeof AlphabetVoid;
    const Parameter: typeof AlphabetParameter;
    const Parameters: typeof AlphabetParameters;
}
export default Alphabet;
