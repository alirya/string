import Validator from '@axiona/validator/simple.js';
import EmptyValidatable from '../validatable/empty.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import EmptyString from '../assert/string/empty.js';
import Static from '@axiona/validator/message/function/static.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidFirstValidLast from '@axiona/array/message/message/list/invalid-first-valid-last.js';


export function EmptyParameters() : Validator<string, '', string>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', MessageType>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType|string> = EmptyString.Parameters
) : Validator<string, '', MessageType|string> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => EmptyValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, '', MessageType|string>;
}


export function EmptyParameter() : Validator<string, '', string>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', MessageType>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType|string>= EmptyString.Parameter
) : Validator<string, '', MessageType|string> {

    return EmptyParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<string, '', MessageType|string>;
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
