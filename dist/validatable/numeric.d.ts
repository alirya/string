import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Numeric;
declare namespace Numeric {
    const Parameter: typeof NumericParameter;
    const Object: typeof NumericObject;
    type Argument<ValueType extends string, MessageType> = NumericArgument<ValueType, MessageType>;
}
export declare function NumericParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
export declare type NumericArgument<ValueType extends string, MessageType> = Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType>;
export declare function NumericObject<ValueType extends string, MessageType>({ value, message }: NumericArgument<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
