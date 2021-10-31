import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import IsMinimum from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";


//
// export default class Minimum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly minimum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MinimumObject(this);
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


export default Minimum;
namespace Minimum {

    export const Parameter = MinimumParameter;
    export const Object = MinimumObject;
    export type Argument<ValueType extends string, MessageType> = MinimumArgument<ValueType, MessageType>;
    export type Type<ValueType, MessageType> = MinimumType<ValueType, MessageType>;
}


export type MinimumType<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;


export function MinimumParameter<ValueType extends string, MessageType>(
    value : ValueType,
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MinimumType<ValueType, MessageType> {

    return Callback({value, minimum, inclusive, converter}, IsMinimum, message) as Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
}

export type MinimumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MinimumNumber &
    Inclusive &
    {converter : (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>

export function MinimumObject<ValueType extends string, MessageType>(
    {
        value,
        minimum,
        inclusive,
        message,
        converter
    } : MinimumArgument<ValueType, MessageType>
) : MinimumType<ValueType, MessageType> {

    return MinimumParameter(value, minimum, inclusive, message, converter);
}
