import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function NotEmpty({ valid, value, subject, }: Validatable & Value<string> & {
    subject?: string;
}): string;
