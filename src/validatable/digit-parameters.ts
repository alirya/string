import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import IsDigit from '../boolean/digit';
import Callback from '@alirya/validator/validatable/callback-function-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function DigitParameters<ValueType extends string, MessageType>(
    value: ValueType,
    message: Dynamic<ValueType, MessageType>
) {

    return Callback(value, IsDigit, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}
