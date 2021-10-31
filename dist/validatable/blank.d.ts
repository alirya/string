import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Blank;
declare namespace Blank {
    const Parameter: typeof BlankParameter;
    const Object: typeof BlankObject;
    type Argument<ValueType extends string, MessageType> = BlankArgument<ValueType, MessageType>;
}
export declare function BlankParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): any;
export declare type BlankArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare function BlankObject<ValueType extends string, MessageType>({ value, message }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): any;
