import {CallbackParameters} from '@alirya/validator/validatable/callback';
import StringGuard from '../boolean/string';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Simple from '@alirya/validator/message/function/simple';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

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
