import Value from "@dikac/t-value/value";
export default function NotEmptyParameter({ value, subject }: Value<string> & {
    subject?: string;
}): Error;
