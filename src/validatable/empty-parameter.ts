import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyParameters from "./empty-parameters";
import MessageStatic from "@dikac/t-validator/message/function/static-parameter";
import Static from "@dikac/t-validator/validatable/static";

export type EmptyArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<MessageStatic<'', ValueType, false, true, MessageType>>;

export default function EmptyParameter<ValueType extends string, MessageType>({
        value,
        message,
    } : EmptyArgument<ValueType, MessageType>
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return EmptyParameters(
        value,
        (value, valid) => message({value, valid})
    );
}


