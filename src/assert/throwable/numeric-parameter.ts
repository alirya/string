import Value from "@dikac/t-value/value";
import NumericParameters from "./numeric-parameters";


export default function NumericParameter({
    value,
    subject
} : Value<string> & {subject ?: string}) : Error {

    return NumericParameters(value, subject);
}


