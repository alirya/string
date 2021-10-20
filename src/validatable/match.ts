import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
import Callback from "@dikac/t-validator/validatable/callback";
import MatchBoolean from "./boolean/match";
import Pattern from "../pattern/pattern/pattern";
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

export default function Match<ValueType extends string, MessageType>({
    value,// : ValueType,
    pattern,// : RegExp,
    message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
} : Message<(result : Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType> & Pattern) {

    return Callback({pattern, value}, MatchBoolean, message);

}
