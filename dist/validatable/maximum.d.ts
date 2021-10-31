import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default Minimum;
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Object: typeof MinimumObject;
    type Argument<ValueType extends string, MessageType> = MinimumArgument<ValueType, MessageType>;
}
export declare type MinimumType<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export declare function MinimumParameter<ValueType extends string, MessageType>(value: ValueType, maximum: number, inclusive: boolean, message: (result: Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>) => MessageType, converter?: (string: ValueType) => number): MinimumType<ValueType, MessageType>;
export declare type MinimumArgument<ValueType extends string, MessageType> = Value<ValueType> & MaximumNumber & Inclusive & {
    converter: (value: ValueType) => number;
} & Message<(result: Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>) => MessageType>;
export declare function MinimumObject<ValueType extends string, MessageType>({ value, maximum, inclusive, message, converter }: MinimumArgument<ValueType, MessageType>): MinimumType<ValueType, MessageType>;
