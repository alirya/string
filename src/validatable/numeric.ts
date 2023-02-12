import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import NumericFromObject from '../boolean/numeric.js';
import Callback from '@alirya/validator/validatable/callback.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';

export function NumericParameters<ValueType, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback.Parameters(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}



export type NumericArgument<ValueType, MessageType>
    = Message<Dynamic.Parameter<ValueType, MessageType>> & Value<ValueType>;

export function NumericParameter<ValueType extends unknown, MessageType>({
        value,
        message
    } : NumericArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NumericParameters(value, (value, valid)=>message({value, valid}));
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
    export type Argument<ValueType extends unknown, MessageType> = NumericArgument<ValueType, MessageType>;
}
export default Numeric;
