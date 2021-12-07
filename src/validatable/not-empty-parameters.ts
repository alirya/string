import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyBoolean from "../boolean/not-empty";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import FunctionStatic from "@dikac/t-validator/message/function/static-parameters";
import Static from "@dikac/t-validator/validatable/static";

export type NotEmptyType<ValueType extends string, MessageType>
    = Static<'', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;

export default function NotEmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : FunctionStatic<'', ValueType, false, true, MessageType>
) : NotEmptyType<ValueType, MessageType>  {

    return Callback(value, NotEmptyBoolean, message) as NotEmptyType<ValueType, MessageType>;
}



