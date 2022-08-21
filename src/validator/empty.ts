import Validator from '@alirya/validator/simple';
import EmptyValidatable from '../validatable/empty';
import Instance from '@alirya/validator/validatable/validatable';
import EmptyString from '../assert/string/empty';
import Static from '@alirya/validator/message/function/static';
import {StringParameters} from "./string";
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import InvalidFirstValidLast from '@alirya/array/message/message/list/invalid-first-valid-last';


export function EmptyParameters() : Validator<string, '', Readonly<Instance<'', string>>>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType|string> = EmptyString.Parameters
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => EmptyValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, '', Readonly<Instance<'', MessageType>>>;
}


export function EmptyParameter() : Validator<string, '', Readonly<Instance<'', string>>>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType|string>= EmptyString.Parameter
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return EmptyParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<string, '', Readonly<Instance<'', MessageType>>>;
}


namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
}
export default Empty;
