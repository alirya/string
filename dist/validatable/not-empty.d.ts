import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default function NotEmpty<ValueType extends string, MessageType>({ value, message }: Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
