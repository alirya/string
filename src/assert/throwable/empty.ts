import EmptyType from "../string/empty";
import Value from "@dikac/t-value/value";

export default function Empty({
    value,
    subject = 'string'
} : Value<string> & { subject?: string }) : Error {

    return new Error(EmptyType(false, value, subject))
}
