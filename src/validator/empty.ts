import Validator from '@alirya/validator/simple.js';
import EmptyValidatable from '../validatable/empty.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import EmptyString from '../assert/string/empty.js';
import Static from '@alirya/validator/message/function/static.js';


export function EmptyParameters() : Validator<string, '', Readonly<Instance<'', string>>>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType|string> = EmptyString.Parameters
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return EmptyValidatable.Parameters(value, message);

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>;
}


export function EmptyParameter() : Validator<string, '', Readonly<Instance<'', string>>>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType|string>= EmptyString.Parameter
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return EmptyValidatable.Parameter({value, message});

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>;
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
