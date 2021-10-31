import IsMinimum from "./boolean/minimum";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
//
// export default class Minimum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly minimum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MinimumObject(this);
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
export function MinimumParameter(value, minimum, inclusive, message, converter = Count) {
    return Callback({ value, minimum, inclusive, converter }, IsMinimum, message);
}
export function MinimumObject({ value, minimum, inclusive, message, converter }) {
    return MinimumParameter(value, minimum, inclusive, message, converter);
}
//# sourceMappingURL=minimum.js.map