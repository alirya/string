import UpperWordsParameters from "./upper-words-parameters";
import UpperWordsParameter, { UpperWordsArgument } from "./upper-words-parameter";
declare namespace UpperWords {
    const Parameters: typeof UpperWordsParameters;
    const Parameter: typeof UpperWordsParameter;
    type Argument = UpperWordsArgument;
}
export default UpperWords;
