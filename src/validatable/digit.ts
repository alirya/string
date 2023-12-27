import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import IsDigit from '../boolean/digit.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';

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
