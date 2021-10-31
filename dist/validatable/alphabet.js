import AlphabetFromObject from "../boolean/alphabet";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
//
// export default class Alphabet<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType>>,
//         Readonly<Message<MessageType>>,
//         ValueOf<string>,
//         Readonly<Validatable>
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
//         this.valid = AlphabetFromObject(value);
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
export default Alphabet;
var Alphabet;
(function (Alphabet) {
    Alphabet.Parameter = AlphabetParameter;
    Alphabet.Object = AlphabetObject;
})(Alphabet || (Alphabet = {}));
export function AlphabetParameter(value, message) {
    return new ValidatableCallbacks.Class.Parameter(value, AlphabetFromObject, message);
}
export function AlphabetObject({ value, message }) {
    return new ValidatableCallbacks.Class.Parameter(value, AlphabetFromObject, message);
}
//# sourceMappingURL=alphabet.js.map