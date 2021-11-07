import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MaximumObject from "../boolean/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/message/function/dynamic";


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

//
// export default Maximum;
// namespace Maximum {
//
//     export const Parameter = MaximumParameter;
//     export const Object = MaximumObject;
//     export type Argument<ValueType extends string, MessageType> = MaximumArgument<ValueType, MessageType>;
//     export type Type<ValueType, MessageType> = MaximumType<ValueType, MessageType>;
// }


export type MaximumType<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;


export default function MaximumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    maximum : number,
    inclusive : boolean,
    message : Dynamic.Parameters<ValueType,  MessageType, [maximum : number, inclusive: boolean, converter : (string:ValueType)=>number]>,//(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MaximumType<ValueType, MessageType> {

    return Object.assign(
        Callback.Function.Parameters(value, MaximumObject.Parameters, message, [maximum, inclusive, converter]),
        {maximum, inclusive}
    ) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
}

// export type MaximumArgument<ValueType extends string, MessageType> =
//
//     Value<ValueType> & MaximumNumber & Inclusive & {converter ?: (value:ValueType)=>number} & Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType>
//
// export function MaximumObject<ValueType extends string, MessageType>(
//     {
//         value,
//         maximum,
//         inclusive,
//         message,
//         converter
//     } : MaximumArgument<ValueType, MessageType>
// ) : MaximumType<ValueType, MessageType> {
//
//     return MaximumParameter(value, maximum, inclusive, message, converter);
// }
