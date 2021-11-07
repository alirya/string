import Value from "@dikac/t-value/value";
export declare type StringArgument = Value<unknown> & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export default function StringParameter({ value, subject, conversion }: StringArgument): Error;
