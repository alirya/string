import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Digit;
declare namespace Digit {
    const Parameter: typeof DigitParameter;
    const Object: typeof DigitObject;
    type Argument<ValueType extends string, MessageType> = DigitArgument<ValueType, MessageType>;
}
export declare function DigitParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): Readonly<Value<ValueType> & Message<MessageType> & Validatable<boolean>>;
export declare type DigitArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare function DigitObject<ValueType extends string, MessageType>({ value, // : ValueType,
message, }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
