import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import NotEmptyBoolean from '../boolean/not-empty';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import {StaticParameter, StaticParameters} from '@alirya/validator/message/function/static';
import Static from '@alirya/validator/validatable/static';

export type NotEmptyReturn<ValueType extends string, MessageType>
    = Static<'', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;

export function NotEmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : StaticParameters<'', ValueType, false, true, MessageType>
) : NotEmptyReturn<ValueType, MessageType>  {

    return CallbackParameters(value, NotEmptyBoolean, message) as NotEmptyReturn<ValueType, MessageType>;
}


export type NotEmptyArgument<
    ValueType extends string,
    MessageType
    > = Message<StaticParameter<'', ValueType, false, true, MessageType>> & Value<ValueType>;

export function NotEmptyParameter<ValueType extends string, MessageType>({
      value,
      message
  } : NotEmptyArgument<ValueType, MessageType>
) : NotEmptyReturn<ValueType, MessageType> {

    return NotEmptyParameters(value, (value, valid) => message({value, valid}));
}



namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
    export type Return<
        ValueType extends string,
        MessageType
    > = NotEmptyReturn<
        ValueType,
        MessageType
    >;
    export type Argument<
        ValueType extends string,
        MessageType
    > = NotEmptyArgument<
        ValueType,
        MessageType
    >;
}
export default NotEmpty;
