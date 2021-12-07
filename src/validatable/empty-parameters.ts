import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import IsEmpty from "../boolean/empty";
import MessageStatic from "@dikac/t-validator/message/function/static-parameters";
import Static from "@dikac/t-validator/validatable/static";

export default function EmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageStatic<'', ValueType, false, true, MessageType>,
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return Callback(value, IsEmpty, message) as
        Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
}


