import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type NotBlankArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function NotBlankParameter({ valid, value, subject, }: NotBlankArgument): string;
