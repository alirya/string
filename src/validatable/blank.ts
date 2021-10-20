import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
import Message from "@dikac/t-message/message";

export default function Blank<ValueType extends string, MessageType>({
    value,
    message
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {

    return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}
