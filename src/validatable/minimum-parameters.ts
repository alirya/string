import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import IsMinimum from "../boolean/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
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


export type MinimumType<ValueType, MessageType> =
    Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;


export default function MinimumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    minimum : number,
    inclusive : boolean,
    // message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
    message : (value:ValueType, valid: boolean, minimum: number, inclusive: boolean)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MinimumType<ValueType, MessageType> {

    return Object.assign(
        Callback.Function.Parameters(value, IsMinimum.Parameters, message, [minimum, inclusive, converter]),
    {minimum, inclusive}
    ) as MinimumType<ValueType, MessageType>;

}
