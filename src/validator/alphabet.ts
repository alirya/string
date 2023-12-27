import Validator from '@axiona/validator/validator.js';
import AlphabetValidatable from '../validatable/alphabet.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import AlphabetString from '../assert/string/alphabet.js';
import Dynamic from '@axiona/validator/message/function/validatable.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidFirstValidLast from '@axiona/array/message/message/list/invalid-first-valid-last.js';

export function AlphabetParameters() : Validator<string, string, boolean, boolean, string>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, MessageType>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphabetString.Parameters
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => AlphabetValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, MessageType|string>;
}


export function AlphabetParameter() : Validator<string, string, boolean, boolean, string>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, MessageType>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphabetString.Parameter
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return AlphabetParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<string, string, boolean, boolean, MessageType|string>;
}


namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
}
export default Alphabet;
