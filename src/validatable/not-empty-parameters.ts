import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyBoolean from "../boolean/not-empty";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import FunctionStatic from "@dikac/t-validator/message/function/static-parameters";
import Static from "@dikac/t-validator/validatable/static";
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

export type NotEmptyType<ValueType extends string, MessageType>
    = Static<'', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;

export default function NotEmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : FunctionStatic<'', ValueType, false, true, MessageType>
) : NotEmptyType<ValueType, MessageType>  {

    return Callback(value, NotEmptyBoolean, message) as NotEmptyType<ValueType, MessageType>;
}



