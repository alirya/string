import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default NotBlank;
declare namespace NotBlank {
    const Parameter: typeof NotBlankParameter;
    const Object: typeof NotBlankObject;
    type Argument<ValueType extends string, MessageType> = NotBlankArgument<ValueType, MessageType>;
}
export declare function NotBlankParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): Readonly<Value<ValueType> & Message<MessageType> & Validatable<boolean>>;
export declare type NotBlankArgument<ValueType extends string, MessageType> = Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType>;
export declare function NotBlankObject<ValueType extends string, MessageType>({ value, message }: NotBlankArgument<ValueType, MessageType>): Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
