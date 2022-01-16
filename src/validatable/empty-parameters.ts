import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Callback from "@alirya/validator/validatable/callback-function-parameters";
import IsEmpty from "../boolean/empty";
import MessageStatic from "@alirya/validator/message/function/static-parameters";
import Static from "@alirya/validator/validatable/static";

export default function EmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageStatic<'', ValueType, false, true, MessageType>,
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return Callback(value, IsEmpty, message) as
        Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
}


