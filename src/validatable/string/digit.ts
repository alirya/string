import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import DigitMessage from "../../assert/string/digit";

export default function Digit(object : Readonly<Value<string> & Validatable>) : string {

    return DigitMessage(object.valid, object.value)
}
