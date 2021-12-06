import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import FunctionStatic from "@dikac/t-validator/message/function/static";
import { NotEmptyType } from "./not-empty-parameters";
export declare type NotEmptyArgument<ValueType extends string, MessageType> = Message<FunctionStatic.Parameter<'', ValueType, false, true, MessageType>> & Value<ValueType>;
export { NotEmptyType };
export default function NotEmptyParameter<ValueType extends string, MessageType>({ value, message }: NotEmptyArgument<ValueType, MessageType>): NotEmptyType<ValueType, MessageType>;
