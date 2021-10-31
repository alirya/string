import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default Alphabet;
declare namespace Alphabet {
    const Parameter: typeof AlphabetParameter;
    const Object: typeof AlphabetObject;
    type Argument<ValueType extends string, MessageType> = AlphabetArgument<ValueType, MessageType>;
}
export declare function AlphabetParameter<ValueType extends string, MessageType>(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): import("@dikac/t-validator/validatable/callback").CallbackParameter<string, ValueType, MessageType>;
export declare type AlphabetArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>;
export declare function AlphabetObject<ValueType extends string, MessageType>({ value, message }: Value<ValueType> & Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType>): import("@dikac/t-validator/validatable/callback").CallbackParameter<string, ValueType, MessageType>;
