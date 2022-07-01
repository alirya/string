import AlphanumericFromObject from '../boolean/alphanumeric';
import {CallbackClassParameters} from '@alirya/validator/validatable/callback';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';

export function AlphanumericParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : ValidatableParameters<ValueType, MessageType>
) {

    return new CallbackClassParameters<ValueType, MessageType>(value, AlphanumericFromObject, message, []);
}




export type AlphanumericArgument<ValueType extends string, MessageType>
    =
    Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function AlphanumericParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphanumericArgument<ValueType, MessageType>) {

    return AlphanumericParameters(value, (value, valid) =>  message({value, valid}));
}



namespace Alphanumeric {
    export const Parameters = AlphanumericParameters;
    export const Parameter = AlphanumericParameter;
}
export default Alphanumeric;
