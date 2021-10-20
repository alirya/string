import Value from "@dikac/t-value/value";
export default function NotBlank({ value, subject }: Value<string> & {
    subject?: string;
}): Error;
