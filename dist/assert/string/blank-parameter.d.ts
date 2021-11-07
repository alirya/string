import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type BlankArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function BlankParameter({ valid, value, subject, }: BlankArgument): string;
