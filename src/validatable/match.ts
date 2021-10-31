import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
import Callback from "@dikac/t-validator/validatable/callback";
import MatchBoolean from "./boolean/match";
import Pattern from "../pattern/pattern/pattern";
import {MatchArgument, MatchObject, MatchParameter} from "./alphanumeric";
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


export default Match;
namespace Match {

    export const Parameter = MatchParameter;
    export const Object = MatchObject;
    export type Argument<ValueType extends string, MessageType> = MatchArgument<ValueType, MessageType>;
}


export function MatchParameter<ValueType extends string, MessageType>(
    value : ValueType,
    pattern : RegExp,
    message : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
) {

    return Callback({pattern, value}, MatchBoolean, message);

}

export type MatchArgument<ValueType, MessageType>
    =
    Message<(result : Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType> & Pattern;

export function MatchObject<ValueType extends string, MessageType>({
    value,// : ValueType,
    pattern,// : RegExp,
    message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
} : MatchArgument<ValueType, MessageType>) {

    return MatchParameter(value, pattern, message);

}
