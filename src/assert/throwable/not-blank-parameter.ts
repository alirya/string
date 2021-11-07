import Value from "@dikac/t-value/value";
import NotBlankParameters from "./not-blank-parameters";

export default function NotBlankParameter({
       value,
       subject
    } : Value<string> & {subject ?: string}) : Error {

    return NotBlankParameters(value, subject);
}

