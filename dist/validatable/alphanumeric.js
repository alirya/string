import AlphanumericFromObject from "../boolean/alphanumeric";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
//
// export default class Alphanumeric<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = AlphanumericFromObject(value);
//
//     }
//
//     valueOf() : string {
//
//         return this.value;
//     }
//
//     toString() : string {
//
//         return this.value;
//     }
//
//     get message() : MessageType {
//
//         return this.messageFactory(this);
//     }
// }
export default Alphanumeric;
var Alphanumeric;
(function (Alphanumeric) {
    Alphanumeric.Parameter = AlphanumericParameter;
    Alphanumeric.Object = AlphanumericObject;
})(Alphanumeric || (Alphanumeric = {}));
export function AlphanumericParameter(value, message) {
    return new ValidatableCallbacks.Class.Parameter(value, AlphanumericFromObject, message);
}
export function AlphanumericObject({ value, message }) {
    return AlphanumericParameter(value, message);
}
//# sourceMappingURL=alphanumeric.js.map