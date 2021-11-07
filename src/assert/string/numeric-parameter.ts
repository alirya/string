import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import NumericParameters from "./numeric-parameters";

export type NumericArgument = Validatable & Value<string> & {subject?:string}

export default function NumericParameter({
    valid,
    value,
    subject
} : NumericArgument) : string {

    return NumericParameters(value, valid, subject);
}

