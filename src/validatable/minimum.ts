import MinimumNumber from '@axiona/number/minimum/minimum.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import IsMinimum from '../boolean/minimum.js';
import Inclusive from '@axiona/number/inclusive/inclusive.js';
import Count from '../number/count.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';

export type MinimumReturnContext = Inclusive & MinimumNumber;
export type MinimumReturn<ValueType, MessageType> = ValidatorValidatable<ValueType, MessageType, boolean, MinimumReturnContext>;


export function MinimumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    minimum : number,
    inclusive : boolean,
    message : (value:ValueType, valid: boolean, minimum: number, inclusive: boolean)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MinimumReturn<ValueType, MessageType> {

    return Object.assign(
        CallbackParameters(value, IsMinimum.Parameters, message, [minimum, inclusive, converter]),
    {minimum, inclusive}
    ) as MinimumReturn<ValueType, MessageType>;

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
) : MinimumReturn<ValueType, MessageType> {

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
