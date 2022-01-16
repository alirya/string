import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import NumericParameters from "./numeric-parameters";

export type NumericArgument = Validatable & Value<string> & {subject?:string}

export default function NumericParameter({
    valid,
    value,
    subject
} : NumericArgument) : string {

    return NumericParameters(value, valid, subject);
}

