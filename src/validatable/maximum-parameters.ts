import MaximumNumber from '@alirya/number/maximum/maximum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import MaximumObject from '../boolean/maximum-parameters';
import Inclusive from '@alirya/number/inclusive/inclusive';
import Count from '../number/count';
import Callback from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export type MaximumParametersReturn<ValueType, MessageType> = Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>;

export default function MaximumParameters<ValueType extends string, MessageType>(
    value : ValueType,
    maximum : number,
    inclusive : boolean,
    message : Dynamic<ValueType,  MessageType, [maximum : number, inclusive: boolean, converter : (string:ValueType)=>number]>,
    converter : (string:ValueType)=>number = Count,
) : MaximumParametersReturn<ValueType, MessageType> {

    return Object.assign(
        Callback(value, MaximumObject, message, [maximum, inclusive, converter]),
        {maximum, inclusive}
    ) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;
}
