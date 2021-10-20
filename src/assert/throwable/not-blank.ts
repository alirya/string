import NotBlankType from "../string/not-blank";
import Value from "@dikac/t-value/value";

export default function NotBlank({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(NotBlankType(false, value, subject))
}
