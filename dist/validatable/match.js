import Callback from "@dikac/t-validator/validatable/callback";
import MatchBoolean from "./boolean/match";
import { MatchObject, MatchParameter } from "./alphanumeric";
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
var Match;
(function (Match) {
    Match.Parameter = MatchParameter;
    Match.Object = MatchObject;
})(Match || (Match = {}));
export function MatchParameter(value, pattern, message) {
    return Callback({ pattern, value }, MatchBoolean, message);
}
export function MatchObject({ value, // : ValueType,
pattern, // : RegExp,
message, // : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
 }) {
    return MatchParameter(value, pattern, message);
}
//# sourceMappingURL=match.js.map