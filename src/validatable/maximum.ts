import MaximumNumber from '@axiona/number/maximum/maximum.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import MaximumObject from '../boolean/maximum.js';
import Inclusive from '@axiona/number/inclusive/inclusive.js';
import Count from '../number/count.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';

export type MaximumReturnContext = Inclusive & MaximumNumber;
export type MaximumReturn<ValueType, MessageType> = ValidatorValidatable<ValueType, MessageType, boolean, MaximumReturnContext>;

export function MaximumParameters<ValueType extends string, MessageType> (
    value : ValueType,
    maximum : number,
    inclusive : boolean,
    message : ValidatableParameters<ValueType,  MessageType, [maximum : number, inclusive: boolean, converter : (string:ValueType)=>number]>,
    converter : (string:ValueType)=>number = Count,
) : MaximumReturn<ValueType, MessageType> {

    return Object.assign(
        CallbackParameters(value, MaximumObject.Parameters, message, [maximum, inclusive, converter]),
        {maximum, inclusive}
    ) as Readonly<Inclusive & MaximumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;
}


export type MaximumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MaximumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable> & {converter : (value:ValueType)=>number})=>MessageType>;

export function MaximumParameter<ValueType extends string, MessageType>(
    {
        value,
        maximum,
        inclusive,
        message,
        converter
    } : MaximumArgument<ValueType, MessageType>
) : MaximumReturn<ValueType, MessageType> {

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        (value, valid, maximum, inclusive, converter) =>
            message({value, valid, maximum, inclusive, converter}),
        converter
    );
}


namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;

    export type Context/*<ValueType, MessageType>*/ = MaximumReturnContext/*<ValueType, MessageType>*/;
    export type Argument<ValueType extends string, MessageType> = MaximumArgument<ValueType, MessageType>;
}
export default Maximum;
