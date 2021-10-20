import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default function Empty<ValueType extends string, MessageType>({ value, message, }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
