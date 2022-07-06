import Validator from '@alirya/validator/validator.js';
import NotEmptyValidatable from '../validatable/not-empty.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import NotEmptyString from '../assert/string/not-empty.js';
import FunctionStatic from '@alirya/validator/message/function/static.js';

export function NotEmptyParameters() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType|string> = NotEmptyString.Parameters
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable.Parameters(value, message);

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
}



export function NotEmptyParameter() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export function NotEmptyParameter<MessageType>(
    message : FunctionStatic.Parameter<'', string, false, true, MessageType|string> = NotEmptyString.Parameter
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable.Parameter({value, message});

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
}


namespace NotEmpty {
    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;
}
export default NotEmpty;
