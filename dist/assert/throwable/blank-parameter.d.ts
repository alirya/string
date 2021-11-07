import Value from "@dikac/t-value/value";
export declare type BlankArgument = Value<string> & {
    subject?: string;
};
export default function BlankParameter({ value, subject }: Value<string> & {
    subject?: string;
}): Error;
