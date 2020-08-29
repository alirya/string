import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Empty<ValueT extends string, MessageT> implements Readonly<Value<ValueT> & Message<MessageT> & Validatable>, ValueOf<string> {
    readonly value: ValueT;
    readonly valid: boolean;
    private messageFactory;
    constructor(value: ValueT, message: (result: Readonly<Value<ValueT> & Validatable>) => MessageT);
    toString(): string;
    valueOf(): string;
    get message(): MessageT;
}
