import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import IsEmpty from '../boolean/empty.js';
import MessageStatic from '@alirya/validator/message/function/static.js';
import Static from '@alirya/validator/validatable/static.js';

export function EmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageStatic.Parameters<'', ValueType, false, true, MessageType>,
) : Static<'', ValueType, false, true, MessageType> {

    return CallbackParameters(value, IsEmpty, message) as Static<'', ValueType, false, true, MessageType>;
}

export type EmptyArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<MessageStatic.Parameter<'', ValueType, false, true, MessageType>>;

export function EmptyParameter<ValueType extends string, MessageType>({
        value,
        message,
    } : EmptyArgument<ValueType, MessageType>
) : Static<'', ValueType, false, true, MessageType> {

    return EmptyParameters(
        value,
        (value, valid) => message({value, valid})
    );
}

namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
