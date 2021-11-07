import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import DigitParameters from "./digit-parameters";

export type DigitArgument = Validatable & Value<string> & {subject?:string};

export default function DigitParameter({
    valid,
    value,
    subject = 'string'
} : DigitArgument) : string {

    return DigitParameters(value, valid, subject);
}
