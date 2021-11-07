import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type NumericArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function NumericParameter({ valid, value, subject }: NumericArgument): string;
