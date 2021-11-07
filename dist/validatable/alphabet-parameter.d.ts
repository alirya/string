import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export declare type AlphabetArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<Dynamic.Parameter<ValueType, MessageType>>;
export default function AlphabetParameter<ValueType extends string, MessageType>({ value, message }: AlphabetArgument<ValueType, MessageType>): import("@dikac/t-validator/validatable/callback-class-parameters").default<string, ValueType, MessageType, unknown[]>;
