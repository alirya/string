import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyBoolean from "./boolean/not-empty";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import NumericFromObject from "../boolean/numeric";
import NotBlankBoolean from "../boolean/not-blank";
//
// export default class NotEmpty<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
//
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
//
//     constructor(
//         readonly value : ValueType,
//         message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
//     ) {
//
//         this.valid = NotEmptyBoolean(this);
//         this.messageFactory = message;
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


export default function NotEmpty<ValueType extends string, MessageType>({
        value,
        message
    } : Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NotEmptyBoolean, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}
