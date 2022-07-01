import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import IsDigit from '../boolean/digit';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';

export function DigitParameters<ValueType extends string, MessageType>(
    value: ValueType,
    message: ValidatableParameters<ValueType, MessageType>
) {

    return CallbackParameters(value, IsDigit, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}


export type DigitArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function DigitParameter<ValueType extends string, MessageType>({
    value,
    message,
} : DigitArgument<ValueType, MessageType>) : Readonly<Value<ValueType> & Message<MessageType> & Validatable>{

    return DigitParameters(value, (value, valid) => message({value, valid}));
}


namespace Digit {
    export const Parameters = DigitParameters;
    export const Parameter = DigitParameter;
}
export default Digit;
