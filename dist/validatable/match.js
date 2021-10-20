import Callback from "@dikac/t-validator/validatable/callback";
import MatchBoolean from "./boolean/match";
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
export default function Match({ value, // : ValueType,
pattern, // : RegExp,
message, // : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
 }) {
    return Callback({ pattern, value }, MatchBoolean, message);
}
//# sourceMappingURL=match.js.map