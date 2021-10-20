import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Pattern from "../pattern/pattern/pattern";
export default function Match<ValueType extends string, MessageType>({ value, // : ValueType,
pattern, // : RegExp,
message, }: Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType> & Pattern): import("@dikac/t-validator/validatable/simple").default<Value<string> & {
    pattern: RegExp;
}, Value<string> & {
    pattern: RegExp;
}, Value<string> & {
    pattern: RegExp;
}, Readonly<Value<Value<string> & {
    pattern: RegExp;
}> & Validatable<boolean> & Message<MessageType>>>;
