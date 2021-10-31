import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import AlphanumericFromObject from "../boolean/alphanumeric";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";

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

export default Alphanumeric;
namespace Alphanumeric {

    export const Parameter = AlphanumericParameter;
    export const Object = AlphanumericObject;
    export type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}


export function AlphanumericParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
) {

    return new ValidatableCallbacks.Class.Parameter<string, ValueType, MessageType>(value, AlphanumericFromObject, message);
}

export type AlphanumericArgument<ValueType extends string, MessageType>
    =
    Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function AlphanumericObject<ValueType extends string, MessageType>({
    value,
    message
} : AlphanumericArgument<ValueType, MessageType>) {

    return AlphanumericParameter(value, message);
}

