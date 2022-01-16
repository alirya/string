import Value from "@alirya/value/value";
import DigitParameters from "./digit-parameters";

export type DigitArgument = Value<string> & {subject ?: string};

export default function DigitParameter({
    value,
    subject = 'string'
} : DigitArgument) : Error {

    return DigitParameters(value, subject)
}


