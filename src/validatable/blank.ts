import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import NotBlankBoolean from '../boolean/not-blank.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';


export function BlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : ValidatableParameters<ValueType, MessageType>,
) {

    return CallbackParameters<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}


export type BlankArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function BlankParameter<ValueType extends string, MessageType>({
    value,
    message
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {

    return BlankParameters(value, (value, valid) =>  message({value, valid}));
}



namespace Blank {
    export const Parameters = BlankParameters;
    export const Parameter = BlankParameter;
}
export default Blank;
