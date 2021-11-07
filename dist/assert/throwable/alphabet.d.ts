import Value from "@dikac/t-value/value";
import AlphabetParameter from "./alphabet-parameters";
export declare type AlphabetArgument = Value<string> & {
    subject?: string;
};
declare namespace Alphabet {
    const Parameter: typeof AlphabetParameter;
    const Object: typeof AlphabetParameter;
    type Argument = AlphabetArgument;
}
export default Alphabet;
