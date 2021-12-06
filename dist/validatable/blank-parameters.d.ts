import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function BlankParameters<ValueType extends string, MessageType>(value: ValueType, message: Dynamic.Parameters<ValueType, MessageType>): any;
