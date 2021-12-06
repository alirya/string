import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function AlphanumericParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): import("@dikac/t-validator/validatable/callback-class-parameters").default<ValueType, MessageType, unknown[], boolean>;
