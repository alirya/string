import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import NotEmptyBoolean from '../boolean/not-empty';
import Callback from '@alirya/validator/validatable/callback-function-parameters';
import FunctionStatic from '@alirya/validator/message/function/static-parameters';
import Static from '@alirya/validator/validatable/static';

export type NotEmptyReturn<ValueType extends string, MessageType>
    = Static<'', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;

export default function NotEmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : FunctionStatic<'', ValueType, false, true, MessageType>
) : NotEmptyReturn<ValueType, MessageType>  {

    return Callback(value, NotEmptyBoolean, message) as NotEmptyReturn<ValueType, MessageType>;
}



