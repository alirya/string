import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NumericMessage from "../../boolean/string/numeric";

export default function Numeric(object : Readonly<Value<string> & Validatable>) : string {

    return NumericMessage(object.valid, object.value)
}
