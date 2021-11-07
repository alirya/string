import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MessageStatic from "@dikac/t-validator/message/function/static";
import Static from "@dikac/t-validator/validatable/static";
export default function EmptyParameters<ValueType extends string, MessageType>(value: ValueType, message: MessageStatic.Parameters<string, '', ValueType, false, true, MessageType>): Readonly<Static<string, '', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
