import Validator from '@alirya/validator/validator';
import AlphanumericValidatable from '../validatable/alphanumeric';
import Instance from '@alirya/validator/validatable/validatable';
import AlphanumericString from '../assert/string/alphanumeric';
import Dynamic from '@alirya/validator/message/function/validatable';
import SimpleValidator from '@alirya/validator/simple';
import {StringParameters} from "./string";
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import InvalidFirstValidLast from '@alirya/array/message/message/list/invalid-first-valid-last';

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
