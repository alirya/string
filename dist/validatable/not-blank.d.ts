import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function NotBlank<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): import("@dikac/t-validator/validatable/simple").default<string, string, ValueType, Readonly<Value<string> & Validatable<boolean> & import("@dikac/t-message/message").default<MessageType>>>;
