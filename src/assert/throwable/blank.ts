import BlankType from "../string/blank";
import Value from "@dikac/t-value/value";

export default function Blank({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(BlankType(false, value, subject))
}
