import Dynamic from "@dikac/t-validator/message/function/dynamic";
import Match from "../value/match";
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
// export default function MatchParameters<ValueType extends string, MessageType>(
//     value : ValueType,
//     pattern : RegExp,
//     message : Dynamic.Parameters<ValueType, MessageType>,
// ) {
//
//     return Callback.Function.Parameters({pattern, value}, MatchBoolean, message);
//
// }

export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {

    #message : Dynamic.Parameters<ValueType, MessageType>;

    constructor(
        value : ValueType,
        pattern : RegExp,
        message : Dynamic.Parameters<ValueType, MessageType>
    ) {
        super(value, pattern);

        this.#message = message;

    }

    get message() : MessageType {

        return this.#message(this.value, this.valid, this.pattern);
    }
}


// export type MatchArgument<ValueType, MessageType>
//     =
//     Message<(result : Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType> & Pattern;
//
// export function MatchObject<ValueType extends string, MessageType>({
//     value,// : ValueType,
//     pattern,// : RegExp,
//     message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
// } : MatchArgument<ValueType, MessageType>) {
//
//     return MatchParameter(value, pattern, message);
//
// }
