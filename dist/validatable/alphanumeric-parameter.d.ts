import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export declare type AlphanumericArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export default function AlphanumericParameter<ValueType extends string, MessageType>({ value, message }: AlphanumericArgument<ValueType, MessageType>): any;
