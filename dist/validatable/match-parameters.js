var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MatchParameter_message;
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
export default class MatchParameter extends Match {
    constructor(value, pattern, message) {
        super(value, pattern);
        _MatchParameter_message.set(this, void 0);
        __classPrivateFieldSet(this, _MatchParameter_message, message, "f");
    }
    get message() {
        return __classPrivateFieldGet(this, _MatchParameter_message, "f").call(this, this.value, this.valid, this.pattern);
    }
}
_MatchParameter_message = new WeakMap();
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
//# sourceMappingURL=match-parameters.js.map