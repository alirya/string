import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Alphanumeric;
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Object: typeof AlphanumericObject;
    type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}
export declare function AlphanumericParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): import("@dikac/t-validator/validatable/callback").CallbackParameter<string, ValueType, MessageType>;
export declare type AlphanumericArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare function AlphanumericObject<ValueType extends string, MessageType>({ value, message }: AlphanumericArgument<ValueType, MessageType>): import("@dikac/t-validator/validatable/callback").CallbackParameter<string, ValueType, MessageType>;
