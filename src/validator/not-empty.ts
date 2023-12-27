import Validator from '@axiona/validator/validator.js';
import NotEmptyValidatable from '../validatable/not-empty.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import NotEmptyString from '../assert/string/not-empty.js';
import FunctionStatic from '@axiona/validator/message/function/static.js';
import {StringParameters} from './string.js';

export function NotEmptyParameters() : Validator<string, '', true, false, string>;

export function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', true, false, MessageType>;

export function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType|string> = NotEmptyString.Parameters
) : Validator<string, '', true, false, MessageType|string> {

    const stringValidator = StringParameters();

    return function (value) {

        const validatable = stringValidator(value);

        if(!validatable.valid) {

            return validatable;
        }

        return NotEmptyValidatable.Parameters(value, message);

    } as Validator<string, '', true, false, MessageType|string>;
}



export function NotEmptyParameter() : Validator<string, '', true, false, string>;

export function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', true, false, MessageType>;

export function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<'', string, false, true, MessageType|string> = NotEmptyString.Parameter
) : Validator<string, '', true, false, MessageType|string> {

    return NotEmptyParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<string, '', true, false, MessageType|string>;
}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
