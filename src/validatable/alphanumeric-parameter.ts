import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
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

export type AlphanumericArgument<ValueType extends string, MessageType>
    =
    Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export default function AlphanumericParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphanumericArgument<ValueType, MessageType>) {

    return AlphanumericParameters(value, (value, valid) =>  message({value, valid}));
}

