import Validator from '@axiona/validator/validator.js';
import AlphanumericValidatable from '../validatable/alphanumeric.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import AlphanumericString from '../assert/string/alphanumeric.js';
import Dynamic from '@axiona/validator/message/function/validatable.js';
import SimpleValidator from '@axiona/validator/simple.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidFirstValidLast from '@axiona/array/message/message/list/invalid-first-valid-last.js';

export function AlphanumericParameters() : Validator<string, string, boolean, boolean, string>;

export function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, MessageType>;

export function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphanumericString.Parameters
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => AlphanumericValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, MessageType|string>;

}

export function AlphanumericParameter() : SimpleValidator<string, string, string>;

export function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : SimpleValidator<string, string, MessageType>;

export function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphanumericString.Parameter
) : SimpleValidator<string, string, MessageType|string> {

    return AlphanumericParameters(
        (value, valid)=>message({value, valid})
    ) as SimpleValidator<string, string, MessageType|string>;
}


namespace Alphanumeric {
    export const Parameters = AlphanumericParameters;
    export const Parameter = AlphanumericParameter;
}
export default Alphanumeric;
