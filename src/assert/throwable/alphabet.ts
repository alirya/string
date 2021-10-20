import AlphabetType from "../string/alphabet";
import Value from "@dikac/t-value/value";

export default function Alphabet({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return new Error(AlphabetType(false, value, subject))
}
