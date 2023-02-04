import Validator from '@alirya/validator/simple';
import EmptyValidatable from '../validatable/empty';
import Instance from '@alirya/validator/validatable/validatable';
import EmptyString from '../assert/string/empty';
import Static from '@alirya/validator/message/function/static';
import {StringParameters} from "./string";
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import InvalidFirstValidLast from '@alirya/array/message/message/list/invalid-first-valid-last';


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
