import Validator from '@alirya/validator/validator.js';
import DigitValidatable from '../validatable/digit.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import DigitString from '../assert/string/digit.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';
import SimpleValidator from '@alirya/validator/simple.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial.js';
import {AndParameters} from '@alirya/array/validatable/and.js';
import InvalidFirstValidLast from '@alirya/array/message/message/list/invalid-first-valid-last.js';

export function DigitParameters() : Validator<string, string, boolean, boolean, string>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, MessageType>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = DigitString.Parameters
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => DigitValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, MessageType|string>;
}


export function DigitParameter() : SimpleValidator<string, string, string>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType>
) : SimpleValidator<string, string, MessageType>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType|string> = DigitString.Parameter
) : SimpleValidator<string, string, MessageType|string> {

    return DigitParameters(
        (value, valid)=>message({value, valid})
    ) as SimpleValidator<string, string, MessageType|string>;
}


namespace Digit {
    export const Parameters = DigitParameters;
    export const Parameter = DigitParameter;
}
export default Digit;
