import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Empty;
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Object: typeof EmptyObject;
    type Argument<ValueType extends string, MessageType> = EmptyArgument<ValueType, MessageType>;
}
export declare function EmptyParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
export declare type EmptyArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare function EmptyObject<ValueType extends string, MessageType>({ value, message, }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
