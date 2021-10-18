import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotBlankBoolean from "../boolean/not-blank";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";

export default function NotBlank<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
) {

    return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);

}
