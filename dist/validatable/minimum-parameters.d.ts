import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export declare type MinimumType<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export default function MinimumParameters<ValueType extends string, MessageType>(value: ValueType, minimum: number, inclusive: boolean, message: (value: ValueType, valid: boolean, minimum: number, inclusive: boolean) => MessageType, converter?: (string: ValueType) => number): MinimumType<ValueType, MessageType>;
