import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/validatable/dynamic";
import MessageDynamic from "@dikac/t-validator/message/function/dynamic";
import NotBlankParameters from "./not-blank-parameters";

export type NotBlankArgument<
    ValueType extends string,
    MessageType
    > = Message<MessageDynamic.Parameter<ValueType, MessageType>> & Value<ValueType>

export default function NotBlankParameter<ValueType extends string, MessageType>({
        value,
        message
    } : NotBlankArgument<ValueType, MessageType>
) : Dynamic<ValueType, MessageType> {

    return NotBlankParameters(value, (value, valid)=>message({value, valid}));
}
