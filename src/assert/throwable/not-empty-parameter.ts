import Value from "@dikac/t-value/value";
import NotEmptyParameters from "./not-empty-parameters";

export default function NotEmptyParameter({
    value,
    subject
} : Value<string> & {subject ?: string}) : Error {

    return NotEmptyParameters(value, subject);
}
