import NotBlankBoolean from '../boolean/not-blank.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import Dynamic from '@axiona/validator/validatable/validatable.js';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';

export function NotBlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : ValidatableParameters<ValueType, MessageType>,
) : Dynamic<ValueType, MessageType> {

    return CallbackParameters(value, NotBlankBoolean, message) as Dynamic<ValueType, MessageType>;

}


export type NotBlankArgument<
    ValueType extends string,
    MessageType
    > = Message<ValidatableParameter<ValueType, MessageType>> & Value<ValueType>;

export function NotBlankParameter<ValueType extends string, MessageType>({
        value,
        message
    } : NotBlankArgument<ValueType, MessageType>
) : Dynamic<ValueType, MessageType> {

    return NotBlankParameters(value, (value, valid)=>message({value, valid}));
}


namespace NotBlank {
    export const Parameters = NotBlankParameters;
    export const Parameter = NotBlankParameter;
}
export default NotBlank;
