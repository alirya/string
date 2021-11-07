import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export declare type DigitArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export default function DigitParameter<ValueType extends string, MessageType>({ value, // : ValueType,
message, }: DigitArgument<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
