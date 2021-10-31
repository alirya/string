import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default NotEmpty;
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Object: typeof NotEmptyObject;
    type Argument<ValueType extends string, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}
export declare function NotEmptyParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
export declare type NotEmptyArgument<ValueType extends string, MessageType> = Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType>;
export declare function NotEmptyObject<ValueType extends string, MessageType>({ value, message }: NotEmptyArgument<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
