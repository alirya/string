import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import {MaximumType} from "./maximum-parameters";
import MaximumParameters from "./maximum-parameters";

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
