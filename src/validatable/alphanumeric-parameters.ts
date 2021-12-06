import AlphanumericFromObject from "../boolean/alphanumeric";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/message/function/validatable";

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


export default function AlphanumericParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>
) {

    return new ValidatableCallbacks.Class.Parameters<ValueType, MessageType>(value, AlphanumericFromObject, message, []);
}


