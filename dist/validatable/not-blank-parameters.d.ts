import Dynamic from "@dikac/t-validator/validatable/dynamic";
import MessageDynamic from "@dikac/t-validator/message/function/dynamic";
export default function NotBlankParameters<ValueType extends string, MessageType>(value: ValueType, message: MessageDynamic.Parameters<ValueType, MessageType>): Dynamic<ValueType, MessageType>;
