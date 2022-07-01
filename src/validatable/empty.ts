import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import IsEmpty from '../boolean/empty';
import MessageStatic from '@alirya/validator/message/function/static';
import Static from '@alirya/validator/validatable/static';

export function EmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageStatic.Parameters<'', ValueType, false, true, MessageType>,
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return CallbackParameters(value, IsEmpty, message) as
        Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
}

export type EmptyArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<MessageStatic.Parameter<'', ValueType, false, true, MessageType>>;

export function EmptyParameter<ValueType extends string, MessageType>({
        value,
        message,
    } : EmptyArgument<ValueType, MessageType>
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

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
