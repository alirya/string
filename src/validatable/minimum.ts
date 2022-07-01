import MinimumNumber from '@alirya/number/minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import IsMinimum from '../boolean/minimum';
import Inclusive from '@alirya/number/inclusive/inclusive';
import Count from '../number/count';
import {CallbackParameters} from '@alirya/validator/validatable/callback';

export type MinimumParametersReturn<ValueType, MessageType> =
    Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;


export function MinimumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    minimum : number,
    inclusive : boolean,
    message : (value:ValueType, valid: boolean, minimum: number, inclusive: boolean)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MinimumParametersReturn<ValueType, MessageType> {

    return Object.assign(
        CallbackParameters(value, IsMinimum.Parameters, message, [minimum, inclusive, converter]),
    {minimum, inclusive}
    ) as MinimumParametersReturn<ValueType, MessageType>;

}


export type MinimumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MinimumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>;

export function MinimumParameter<ValueType extends string, MessageType>(
     {
         value,
         minimum,
         inclusive,
         message,
         converter
     } : MinimumArgument<ValueType, MessageType>
) : MinimumParametersReturn<ValueType, MessageType> {

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive}),
        converter
    );

}


namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
}
export default Minimum;
