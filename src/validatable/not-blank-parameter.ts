import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/validatable/validatable";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameter";
import NotBlankParameters from "./not-blank-parameters";

export type NotBlankArgument<
    ValueType extends string,
    MessageType
    > = Message<MessageDynamic<ValueType, MessageType>> & Value<ValueType>

export default function NotBlankParameter<ValueType extends string, MessageType>({
        value,
        message
    } : NotBlankArgument<ValueType, MessageType>
) : Dynamic<ValueType, MessageType> {

    return NotBlankParameters(value, (value, valid)=>message({value, valid}));
}
