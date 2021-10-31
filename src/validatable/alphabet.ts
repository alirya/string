import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import AlphabetFromObject from "../boolean/alphabet";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import AlphanumericFromObject from "../boolean/alphanumeric";
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

export default Alphabet;
namespace Alphabet {

    export const Parameter = AlphabetParameter;
    export const Object = AlphabetObject;
    export type Argument<ValueType extends string, MessageType> = AlphabetArgument<ValueType, MessageType>;
}


export function AlphabetParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
) {

    return new ValidatableCallbacks.Class.Parameter<string, ValueType, MessageType>(value, AlphabetFromObject, message);
}

export type AlphabetArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function AlphabetObject<ValueType extends string, MessageType>({
    value,
    message
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {

    return new ValidatableCallbacks.Class.Parameter<string, ValueType, MessageType>(value, AlphabetFromObject, message);
}

