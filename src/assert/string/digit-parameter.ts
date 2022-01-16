import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import DigitParameters from "./digit-parameters";

export type DigitArgument = Validatable & Value<string> & {subject?:string};

export default function DigitParameter({
    valid,
    value,
    subject = 'string'
} : DigitArgument) : string {

    return DigitParameters(value, valid, subject);
}
