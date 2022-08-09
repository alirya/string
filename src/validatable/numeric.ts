import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import NumericFromObject from '../boolean/numeric';
import Callback from '@alirya/validator/validatable/callback';
import Dynamic from '@alirya/validator/message/function/validatable';

export function NumericParameters<ValueType extends string|number, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback.Parameters(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}



export type NumericArgument<ValueType extends string|number, MessageType>
    = Message<Dynamic.Parameter<ValueType, MessageType>> & Value<ValueType>;

export function NumericParameter<ValueType extends string|number, MessageType>({
        value,
        message
    } : NumericArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NumericParameters(value, (value, valid)=>message({value, valid}));
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
    export type Argument<ValueType extends string|number, MessageType> = NumericArgument<ValueType, MessageType>;
}
export default Numeric;
