import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import FunctionStatic from "@dikac/t-validator/message/function/static";
import Static from "@dikac/t-validator/validatable/static";
export declare type NotEmptyType<ValueType extends string, MessageType> = Static<'', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;
export default function NotEmptyParameters<ValueType extends string, MessageType>(value: ValueType, message: FunctionStatic.Parameters<'', ValueType, false, true, MessageType>): NotEmptyType<ValueType, MessageType>;
