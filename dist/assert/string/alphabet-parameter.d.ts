import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type AlphabetArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function AlphabetParameter({ valid, value, subject }: AlphabetArgument): string;
