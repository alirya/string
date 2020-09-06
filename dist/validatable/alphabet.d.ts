import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Alphabet<ValueType extends string, MessageType> implements Readonly<Value<ValueType>>, Readonly<Message<MessageType>>, ValueOf<string>, Readonly<Validatable> {
    readonly value: ValueType;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueType, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType);
    valueOf(): string;
    toString(): string;
    get message(): MessageType;
}
