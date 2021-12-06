import Dynamic from "@dikac/t-validator/message/function/validatable";
import Match from "../value/match";
export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {
    #private;
    constructor(value: ValueType, pattern: RegExp, message: Dynamic.Parameters<ValueType, MessageType>);
    get message(): MessageType;
}
