import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import IsDigit from "../boolean/digit";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";

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

export default function DigitParameters<ValueType extends string, MessageType>(
    value: ValueType,
    message: Dynamic<ValueType, MessageType>
) {

    return Callback(value, IsDigit, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}
