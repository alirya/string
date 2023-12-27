import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import NotBlankBoolean from '../boolean/not-blank.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';


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
