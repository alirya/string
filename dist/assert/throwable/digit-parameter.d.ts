import Value from "@dikac/t-value/value";
export declare type DigitArgument = Value<string> & {
    subject?: string;
};
export default function DigitParameter({ value, subject }: DigitArgument): Error;
