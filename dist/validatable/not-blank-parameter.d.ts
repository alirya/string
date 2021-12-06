import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/validatable/validatable";
import MessageDynamic from "@dikac/t-validator/message/function/validatable";
export declare type NotBlankArgument<ValueType extends string, MessageType> = Message<MessageDynamic.Parameter<ValueType, MessageType>> & Value<ValueType>;
export default function NotBlankParameter<ValueType extends string, MessageType>({ value, message }: NotBlankArgument<ValueType, MessageType>): Dynamic<ValueType, MessageType>;
