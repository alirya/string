import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default function Alphabet<ValueType extends string, MessageType>({ value, message }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): import("@dikac/t-validator/validatable/simple").default<string, string, ValueType, Readonly<Value<string> & Validatable<boolean> & Message<MessageType>>>;
