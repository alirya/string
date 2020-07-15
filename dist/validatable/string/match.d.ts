import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function Match(object: Readonly<Value<string> & Validatable> & {
    pattern: RegExp;
}): string;
