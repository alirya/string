import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";
export default function Match({ value, pattern, subject, }: Value<string> & Pattern & {
    subject?: string;
}): Error;
