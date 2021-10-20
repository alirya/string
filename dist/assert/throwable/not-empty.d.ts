import Value from "@dikac/t-value/value";
export default function NotEmpty({ value, subject }: Value<string> & {
    subject?: string;
}): Error;
