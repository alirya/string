import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function BlankParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): Readonly<import("@dikac/t-validator/validatable/simple").default<string, ValueType, import("@dikac/t-validator/validatable/validatable").default<string, MessageType, boolean>>>;
