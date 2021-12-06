import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Pattern from "../pattern/pattern/pattern";
import Match from "../value/match";
import Dynamic from "@dikac/t-validator/message/function/validatable";
//
// export default class Matchz<ValueType extends string, MessageType>
//     extends ValueMatch<ValueType>
//     implements Readonly<Message<MessageType>>
// {
//     constructor(
//         readonly value : ValueType,
//         readonly pattern : RegExp,
//         private messageFactory : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
//     ) {
//         super(value, pattern);
//     }
//
//     get message () : MessageType {
//
//         return MemoizeGetter(this, 'message', this.messageFactory(this));
//     }
// }

//
// export default Match;
// namespace Match {
//
//     export const Parameter = MatchParameter;
//     export const Object = MatchObject;
//     export type Argument<ValueType extends string, MessageType> = MatchArgument<ValueType, MessageType>;
// }
//
//
// export function MatchParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     pattern : RegExp,
//     message : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
// ) {
//
//     return Callback({pattern, value}, MatchBoolean, message);
//
// }

export type MatchArgument<ValueType, MessageType>
    =
    Message<Dynamic.Parameter<ValueType, MessageType>> & Value<ValueType> & Pattern;
//
// export  function MatchParameter<ValueType extends string, MessageType>({
//     value,// : ValueType,
//     pattern,// : RegExp,
//     message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
// } : MatchArgument<ValueType, MessageType>) {
//
//     return MatchParameters(value, pattern, message);
//
// }

export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {

    #message : Dynamic.Parameter<ValueType, MessageType>;

    constructor({
                    value,// : ValueType,
                    pattern,// : RegExp,
                    message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
                } : MatchArgument<ValueType, MessageType>) {
        super(value, pattern);

        this.#message = message;

    }

    get message() : MessageType {

        return this.#message(this);
    }
}
