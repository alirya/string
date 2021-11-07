import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
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

export type AlphabetArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<Dynamic.Parameter<ValueType, MessageType>>;

export default function AlphabetParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphabetArgument<ValueType, MessageType>) {

    return AlphabetParameters(value, (value, valid)=>message({value, valid}))
}

