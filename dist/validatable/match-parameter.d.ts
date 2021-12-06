import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Pattern from "../pattern/pattern/pattern";
import Match from "../value/match";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export declare type MatchArgument<ValueType, MessageType> = Message<Dynamic.Parameter<ValueType, MessageType>> & Value<ValueType> & Pattern;
export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {
    #private;
    constructor({ value, // : ValueType,
    pattern, // : RegExp,
    message, }: MatchArgument<ValueType, MessageType>);
    get message(): MessageType;
}
