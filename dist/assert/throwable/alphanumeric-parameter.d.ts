import Value from "@dikac/t-value/value";
export declare type AlphanumericArgument = Value<string> & {
    subject?: string;
};
export default function AlphanumericObject({ value, subject }: AlphanumericArgument): Error;
