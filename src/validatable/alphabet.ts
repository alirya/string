import AlphabetFromObject from '../boolean/alphabet.js';
import {CallbackClassParameters} from '@axiona/validator/validatable/callback.js';
import Validatable from '@axiona/validator/message/function/validatable.js';

export function AlphabetParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Validatable.Parameters<ValueType, MessageType>
) {

    return new CallbackClassParameters<ValueType, MessageType>(value, AlphabetFromObject, message);
}

import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';

export type AlphabetArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<Validatable.Parameter<ValueType, MessageType>>;

export function AlphabetParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphabetArgument<ValueType, MessageType>) {

    return AlphabetParameters(value, (value, valid)=>message({value, valid}));
}



namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
}
export default Alphabet;
