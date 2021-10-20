import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export declare type Return<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export default function Minimum<ValueType extends string, MessageType>({ value, maximum, inclusive, message, converter }: Value<ValueType> & MaximumNumber & Inclusive & {
    converter: (value: ValueType) => number;
} & Message<(result: Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>) => MessageType>): Return<ValueType, MessageType>;
