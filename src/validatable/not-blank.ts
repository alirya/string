import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotBlankBoolean from "../boolean/not-blank";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import Message from "@dikac/t-message/message";
import Callback from "@dikac/t-validator/validatable/callback";
import NotEmptyBoolean from "./boolean/not-empty";

export default function NotBlank<ValueType extends string, MessageType>({
        value,
        message
    } : Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NotBlankBoolean, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}
