import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MaximumNumber from '@alirya/number/maximum/maximum';
import {MaximumParametersReturn as MaximumParameterReturn} from './maximum-parameters';
import MaximumParameters from './maximum-parameters';

export {MaximumParameterReturn};
export type MaximumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MaximumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable> & {converter : (value:ValueType)=>number})=>MessageType>;

export default function MaximumParameter<ValueType extends string, MessageType>(
    {
        value,
        maximum,
        inclusive,
        message,
        converter
    } : MaximumArgument<ValueType, MessageType>
) : MaximumParameterReturn<ValueType, MessageType> {

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        (value, valid, maximum, inclusive, converter) =>
            message({value, valid, maximum, inclusive, converter}),
        converter
    );
}
