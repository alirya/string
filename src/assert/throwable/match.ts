import MatchType from "../string/match";
import Value from "@dikac/t-value/value";
import Pattern from "../../pattern/pattern/pattern";

export default function Match({
    value,
    pattern,
    subject = 'string',
} : Value<string> & Pattern & {subject ?: string}) : Error {

    return new Error(MatchType(false, value, pattern, subject))
}
