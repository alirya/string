import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import AlphanumericParameters from "./alphanumeric-parameters";

export type AlphanumericArgument = Validatable & Value<string> & {subject ?: string};

export default function AlphanumericParameter({
    valid,
    value,
    subject
} : AlphanumericArgument) : string {

    return AlphanumericParameters(value, valid, subject);
}
