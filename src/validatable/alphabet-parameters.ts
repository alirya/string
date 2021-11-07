import AlphabetFromObject from "../boolean/alphabet";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
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

export default function AlphabetParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>
) {

    return new ValidatableCallbacks.Class.Parameters<string, ValueType, MessageType>(value, AlphabetFromObject, message, []);
}
