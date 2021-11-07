import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import DigitParameters from "./digit-parameters";

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

export type DigitArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export default function DigitParameter<ValueType extends string, MessageType>({
    value,// : ValueType,
    message,// : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
} : DigitArgument<ValueType, MessageType>) : Readonly<Value<ValueType> & Message<MessageType> & Validatable>{

    return DigitParameters(value, (value, valid) => message({value, valid}));
}
