import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MessageStatic from "@dikac/t-validator/message/function/static";
import Static from "@dikac/t-validator/validatable/static";
export declare type EmptyArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<MessageStatic.Parameter<string, '', ValueType, false, true, MessageType>>;
export default function EmptyParameter<ValueType extends string, MessageType>({ value, message, }: EmptyArgument<ValueType, MessageType>): Readonly<Static<string, '', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
