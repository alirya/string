import NumericType from "../string/numeric";
import Value from "@dikac/t-value/value";

export default function Numeric({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(NumericType(false, value, subject))
}
