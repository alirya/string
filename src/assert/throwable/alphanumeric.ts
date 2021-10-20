import AlphanumericType from "../string/alphanumeric";
import Value from "@dikac/t-value/value";

export default function Alphanumeric({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string }) : Error {

    return new Error(AlphanumericType(false, value, subject))
}
