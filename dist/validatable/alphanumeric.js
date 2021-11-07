import AlphanumericParameter from "./alphanumeric-parameter";
import AlphanumericParameters from "./alphanumeric-parameters";
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
var Alphanumeric;
(function (Alphanumeric) {
    Alphanumeric.Parameter = AlphanumericParameter;
    Alphanumeric.Parameters = AlphanumericParameters;
})(Alphanumeric || (Alphanumeric = {}));
export default Alphanumeric;
//# sourceMappingURL=alphanumeric.js.map