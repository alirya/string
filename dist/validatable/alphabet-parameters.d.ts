import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function AlphabetParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): import("@dikac/t-validator/validatable/callback-class-parameters").default<string, ValueType, MessageType, unknown[]>;
