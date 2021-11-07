import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type EmptyArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function EmptyParameter({ valid, value, subject, }: EmptyArgument): string;
