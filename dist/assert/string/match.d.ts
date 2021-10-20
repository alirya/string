import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";
export default function Match({ valid, value, pattern, subject, }: Validatable & Value<string> & Pattern & {
    subject?: string;
}): string;
