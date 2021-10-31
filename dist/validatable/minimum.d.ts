import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default Minimum;
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Object: typeof MinimumObject;
    type Argument<ValueType extends string, MessageType> = MinimumArgument<ValueType, MessageType>;
    type Type<ValueType, MessageType> = MinimumType<ValueType, MessageType>;
}
export declare type MinimumType<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>;
export declare function MinimumParameter<ValueType extends string, MessageType>(value: ValueType, minimum: number, inclusive: boolean, message: (result: Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>) => MessageType, converter?: (string: ValueType) => number): MinimumType<ValueType, MessageType>;
export declare type MinimumArgument<ValueType extends string, MessageType> = Value<ValueType> & MinimumNumber & Inclusive & {
    converter: (value: ValueType) => number;
} & Message<(result: Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>) => MessageType>;
export declare function MinimumObject<ValueType extends string, MessageType>({ value, minimum, inclusive, message, converter }: MinimumArgument<ValueType, MessageType>): MinimumType<ValueType, MessageType>;
