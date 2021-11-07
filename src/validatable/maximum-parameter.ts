import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import {MaximumType} from "./maximum-parameters";
import MaximumParameters from "./maximum-parameters";


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
//
//
// export type MaximumType<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;
//
//
// export function MaximumParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     maximum : number,
//     inclusive : boolean,
//     message : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
//     converter : (string:ValueType)=>number = Count,
// ) : MaximumType<ValueType, MessageType> {
//
//     return Callback({value, maximum, inclusive, converter}, MaximumObject, message) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
// }

export {MaximumType};
export type MaximumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MaximumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable> & {converter : (value:ValueType)=>number})=>MessageType>

export default function MaximumParameter<ValueType extends string, MessageType>(
    {
        value,
        maximum,
        inclusive,
        message,
        converter
    } : MaximumArgument<ValueType, MessageType>
) : MaximumType<ValueType, MessageType> {

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        (value, valid, maximum, inclusive, converter) =>
            message({value, valid, maximum, inclusive, converter}),
        converter
    );
}
