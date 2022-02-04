import MinimumNumber from '@alirya/number/minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import IsMinimum from '../boolean/minimum-parameters';
import Inclusive from '@alirya/number/inclusive/inclusive';
import Count from '../number/count';
import Callback from '@alirya/validator/validatable/callback-function-parameters';

export type MinimumParametersReturn<ValueType, MessageType> =
    Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;


export default function MinimumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    minimum : number,
    inclusive : boolean,
    message : (value:ValueType, valid: boolean, minimum: number, inclusive: boolean)=>MessageType,
    converter : (string:ValueType)=>number = Count,
) : MinimumParametersReturn<ValueType, MessageType> {

    return Object.assign(
        Callback(value, IsMinimum, message, [minimum, inclusive, converter]),
    {minimum, inclusive}
    ) as MinimumParametersReturn<ValueType, MessageType>;

}
