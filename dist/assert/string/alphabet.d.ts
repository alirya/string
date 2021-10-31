import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Alphabet;
declare namespace Alphabet {
    const Parameter: typeof AlphabetParameter;
    const Object: typeof AlphabetObject;
    type Argument = AlphabetArgument;
}
export declare function AlphabetParameter(value: string, valid: boolean, subject?: string): string;
export declare type AlphabetArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function AlphabetObject({ valid, value, subject }: AlphabetArgument): string;
