import Dynamic from "@dikac/t-validator/validatable/validatable";
import MessageDynamic from "@dikac/t-validator/message/function/validatable";
export default function NotBlankParameters<ValueType extends string, MessageType>(value: ValueType, message: MessageDynamic.Parameters<ValueType, MessageType>): Dynamic<ValueType, MessageType>;
