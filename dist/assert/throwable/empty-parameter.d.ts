import Value from "@dikac/t-value/value";
export declare type EmptyArgument = Value<string> & {
    subject?: string;
};
export default function EmptyObject({ value, subject }: EmptyArgument): Error;
