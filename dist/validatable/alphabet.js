import AlphabetParameter from "./alphabet-parameter";
import AlphabetParameters from "./alphabet-parameters";
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
var Alphabet;
(function (Alphabet) {
    Alphabet.Parameter = AlphabetParameter;
    Alphabet.Parameters = AlphabetParameters;
})(Alphabet || (Alphabet = {}));
export default Alphabet;
//# sourceMappingURL=alphabet.js.map