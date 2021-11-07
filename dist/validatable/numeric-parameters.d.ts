import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function NumericParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
