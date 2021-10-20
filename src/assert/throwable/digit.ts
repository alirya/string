import DigitType from "../string/digit";
import Value from "@dikac/t-value/value";

export default function Digit({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(DigitType(false, value, subject))
}
