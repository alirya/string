import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
export default String;
declare namespace String {
    const Parameter: typeof StringParameter;
    const Object: typeof StringObject;
    type Argument<ValueType, MessageType> = StringArgument<ValueType, MessageType>;
}
export declare function StringParameter<MessageType, Argument>(value: Argument, message: (value: Argument, valid: boolean) => MessageType): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
export declare type StringArgument<MessageType, Argument> = Value<Argument> & Message<(result: Readonly<Value<Argument> & Validatable>) => MessageType>;
export declare function StringObject<MessageType, Argument>({ value, message }: StringArgument<MessageType, Argument>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
