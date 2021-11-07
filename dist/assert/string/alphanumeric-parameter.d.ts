import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type AlphanumericArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function AlphanumericParameter({ valid, value, subject }: AlphanumericArgument): string;
