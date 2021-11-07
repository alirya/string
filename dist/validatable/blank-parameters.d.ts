import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function BlankParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): import("@dikac/t-validator/validatable/callback-function-parameters").CallbackFunctionType<string, ValueType, MessageType>;
