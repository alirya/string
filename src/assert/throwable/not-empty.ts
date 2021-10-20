import NotEmptyType from "../string/not-empty";
import Value from "@dikac/t-value/value";

export default function NotEmpty({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(NotEmptyType(false, value, subject))
}
