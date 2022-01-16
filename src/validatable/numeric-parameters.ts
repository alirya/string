import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import NumericFromObject from '../boolean/numeric';
import Callback from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function NumericParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}

