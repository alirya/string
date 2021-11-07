import Value from "@dikac/t-value/value";
export declare type AlphabetArgument = Value<string> & {
    subject?: string;
};
export default function AlphabetObject({ value, subject }: AlphabetArgument): Error;
