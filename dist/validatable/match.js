import MatchParameter from "./match-parameter";
import MatchParameters from "./match-parameters";
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
var Match;
(function (Match) {
    Match.Parameter = MatchParameter;
    Match.Parameters = MatchParameters;
})(Match || (Match = {}));
export default Match;
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
//
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
//# sourceMappingURL=match.js.map