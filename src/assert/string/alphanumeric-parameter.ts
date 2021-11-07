import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import AlphanumericParameters from "./alphanumeric-parameters";

export type AlphanumericArgument = Validatable & Value<string> & {subject ?: string};

export default function AlphanumericParameter({
    valid,
    value,
    subject
} : AlphanumericArgument) : string {

    return AlphanumericParameters(value, valid, subject);
}
