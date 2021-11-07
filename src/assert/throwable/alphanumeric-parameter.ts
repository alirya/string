import Value from "@dikac/t-value/value";
import AlphanumericParameters from "./alphanumeric-parameters";

export type AlphanumericArgument = Value<string> & {subject ?: string};

export default function AlphanumericObject({
    value,
    subject
} : AlphanumericArgument) : Error {

    return AlphanumericParameters(value, subject);
}

