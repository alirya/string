import MaximumObject from "./boolean/maximum";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
//
// export default class Maximum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly maximum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MaximumObject(this);
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
export default Minimum;
var Minimum;
(function (Minimum) {
    Minimum.Parameter = MinimumParameter;
    Minimum.Object = MinimumObject;
})(Minimum || (Minimum = {}));
export function MinimumParameter(value, maximum, inclusive, message, converter = Count) {
    return Callback({ value, maximum, inclusive, converter }, MaximumObject, message);
}
export function MinimumObject({ value, maximum, inclusive, message, converter }) {
    return MinimumParameter(value, maximum, inclusive, message, converter);
}
//# sourceMappingURL=maximum.js.map