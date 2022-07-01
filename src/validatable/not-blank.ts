import NotBlankBoolean from '../boolean/not-blank';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import Dynamic from '@alirya/validator/validatable/validatable';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

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
