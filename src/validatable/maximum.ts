import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MaximumObject from "./boolean/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import ValueOf from "@dikac/t-value/value-of/value-of";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Callback from "@dikac/t-validator/validatable/callback";
import MinimumObject from "./boolean/minimum";
//
// export default class Maximum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly maximum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MaximumObject(this);
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

export type Return<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;


export default function Minimum<ValueType extends string, MessageType>(
    {
        value,
        maximum,
        inclusive,
        message,
        converter
    } : Value<ValueType> & MaximumNumber & Inclusive & {converter : (value:ValueType)=>number} & Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType>
) : Return<ValueType, MessageType> {

    return Callback({value, maximum, inclusive, converter}, MaximumObject, message) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
}
