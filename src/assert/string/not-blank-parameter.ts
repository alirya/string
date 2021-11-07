import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import NotBlankParameters from "./not-blank-parameters";

export type NotBlankArgument = Validatable & Value<string> & {subject ?: string};

export default function NotBlankParameter({
    valid,
    value,
    subject,
} : NotBlankArgument) : string {

    return NotBlankParameters(value, valid, subject);
}
