import AlphabetParameter from "./alphabet-parameter";
import AlphabetParameters from "./alphabet-parameters";
import { AlphanumericArgument } from "./alphanumeric-parameter";
declare namespace Alphabet {
    const Parameter: typeof AlphabetParameter;
    const Parameters: typeof AlphabetParameters;
    type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}
export default Alphabet;
