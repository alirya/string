import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export declare type Return<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export default function Minimum<ValueType extends string, MessageType>({ value, minimum, inclusive, message, converter }: Value<ValueType> & MinimumNumber & Inclusive & {
    converter: (value: ValueType) => number;
} & Message<(result: Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>) => MessageType>): Return<ValueType, MessageType>;
