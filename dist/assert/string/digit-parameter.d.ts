import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type DigitArgument = Validatable & Value<string> & {
    subject?: string;
};
export default function DigitParameter({ valid, value, subject }: DigitArgument): string;
