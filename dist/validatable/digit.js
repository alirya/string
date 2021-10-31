import IsDigit from "../boolean/digit";
import Callback from "@dikac/t-validator/validatable/callback";
//
// export default class Digit<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
//
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
//         this.valid = IsDigit(value);
//
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
//
//     valueOf() : string {
//
//         return this.value;
//     }
// }
export default Digit;
var Digit;
(function (Digit) {
    Digit.Parameter = DigitParameter;
    Digit.Object = DigitObject;
})(Digit || (Digit = {}));
export function DigitParameter(value, message) {
    return Callback(value, IsDigit, message);
}
export function DigitObject({ value, // : ValueType,
message, // : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
 }) {
    return DigitParameter(value, message);
}
//# sourceMappingURL=digit.js.map