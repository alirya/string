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
// export  function MatchParameter<ValueType extends string, MessageType>({
//     value,// : ValueType,
//     pattern,// : RegExp,
//     message,// : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
// } : MatchArgument<ValueType, MessageType>) {
//
//     return MatchParameters(value, pattern, message);
//
// }
export default class MatchParameter extends Match {
    constructor({ value, // : ValueType,
    pattern, // : RegExp,
    message, // : (result : Readonly<Value<ValueType> & Validatable>)=>MessageType,
     }) {
        super(value, pattern);
        _MatchParameter_message.set(this, void 0);
        __classPrivateFieldSet(this, _MatchParameter_message, message, "f");
    }
    get message() {
        return __classPrivateFieldGet(this, _MatchParameter_message, "f").call(this, this);
    }
}
_MatchParameter_message = new WeakMap();
//# sourceMappingURL=match-parameter.js.map