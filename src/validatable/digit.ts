import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import IsDigit from "../boolean/digit";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import EmptyParameter from "../boolean/empty";

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

export default Digit;
namespace Digit {

    export const Parameter = DigitParameter;
    export const Object = DigitObject;
    export type Argument<ValueType extends string, MessageType> = DigitArgument<ValueType, MessageType>;
}


export function DigitParameter<ValueType extends string, MessageType>(
    value: ValueType,
    message: (result:Readonly<Value<ValueType> & Validatable>)=>MessageType)
{

    return Callback(value, IsDigit, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}

export type DigitArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function DigitObject<ValueType extends string, MessageType>({
    value,// : ValueType,
    message,// : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) : Readonly<Value<ValueType> & Message<MessageType> & Validatable>{

    return DigitParameter(value, message);
}
