import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MinimumObject from "./boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import NotEmptyBoolean from "./boolean/not-empty";

//
// export default class Minimum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly minimum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//         readonly converter : (value:ValueType)=>number = Count,
//     ) {
//
//         this.valid = MinimumObject(this);
//         this.messageFactory = message;
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

export type Return<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;

export default function Minimum<ValueType extends string, MessageType>(
    {
        value,
        minimum,
        inclusive,
        message,
        converter
    } : Value<ValueType> & MinimumNumber & Inclusive & {converter : (value:ValueType)=>number} & Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>
) : Return<ValueType, MessageType>  {

    return Callback({value, minimum, inclusive, converter}, MinimumObject, message) as Return<ValueType, MessageType>
}
