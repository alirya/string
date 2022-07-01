import {CallbackParameters} from '@alirya/validator/validatable/callback';
import NotBlankBoolean from '../boolean/not-blank';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';


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
