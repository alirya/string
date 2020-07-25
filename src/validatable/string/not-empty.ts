import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotEmptyMessage from "../../boolean/string/not-empty";

export default function NotEmpty(object : Readonly<Value<string> & Validatable>) : string {

    return NotEmptyMessage(object.valid, object.value)
}
