import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export declare type MaximumType<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export default function MaximumParameters<ValueType extends string, MessageType>(value: ValueType, maximum: number, inclusive: boolean, message: Dynamic.Parameters<ValueType, MessageType, [maximum: number, inclusive: boolean, converter: (string: ValueType) => number]>, //(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
converter?: (string: ValueType) => number): MaximumType<ValueType, MessageType>;
