import AlphabetFromObject from '../boolean/alphabet';
import {CallbackClassParameters} from '@alirya/validator/validatable/callback';
import Validatable from '@alirya/validator/message/function/validatable';

export function AlphabetParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Validatable.Parameters<ValueType, MessageType>
) {

    return new CallbackClassParameters<ValueType, MessageType>(value, AlphabetFromObject, message);
}

import Value from '@alirya/value/value';
import Message from '@alirya/message/message';

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
