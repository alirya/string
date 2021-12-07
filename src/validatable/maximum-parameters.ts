import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MaximumObject from "../boolean/maximum-parameters";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export type MaximumType<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;

export default function MaximumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    maximum : number,
    inclusive : boolean,
    message : Dynamic.Parameters<ValueType,  MessageType, [maximum : number, inclusive: boolean, converter : (string:ValueType)=>number]>,//(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MaximumType<ValueType, MessageType> {

    return Object.assign(
        Callback.Function.Parameters(value, MaximumObject, message, [maximum, inclusive, converter]),
        {maximum, inclusive}
    ) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
}
