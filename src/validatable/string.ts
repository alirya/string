import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import StringGuard from '../boolean/string.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import Simple from '@axiona/validator/message/function/simple.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';

export function StringParameters<Argument, MessageType>(
    value : Argument,
    message : Simple.Parameters<unknown, Argument, MessageType>
) : Return<Argument, string, MessageType> {

    return <Return<Argument, string, MessageType>>
        CallbackParameters(value, StringGuard, message);
}




export type StringArgument<Argument, MessageType> =
    Value<Argument> &
    Message<Simple.Parameter<Argument, Argument, MessageType>>;

export function StringParameter<Argument, MessageType>(
    {
      value,
      message
    } : StringArgument<Argument, MessageType>
) : Return<Argument, string, MessageType> {

    return StringParameters(value, (value, valid)=>message({valid, value}));
}


namespace String {
    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
    export type Argument<Argument, MessageType>  = StringArgument<Argument, MessageType>;
}
export default String;
