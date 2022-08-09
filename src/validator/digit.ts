import Validator from '@alirya/validator/validator';
import DigitValidatable from '../validatable/digit';
import Instance from '@alirya/validator/validatable/validatable';
import DigitString from '../assert/string/digit';
import Dynamic from '@alirya/validator/message/function/validatable';
import SimpleValidator from '@alirya/validator/simple';
import {StringParameters} from "./string";
import {ValuePartialParameters} from "../../../array/dist/validator/value-partial";
import {AndParameters} from "../../../array/dist/validatable/and";
import InvalidFirstValidLast from "../../../array/dist/message/message/list/invalid-first-valid-last";

export function DigitParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = DigitString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => DigitValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


export function DigitParameter() : SimpleValidator<string, string, Readonly<Instance<string, string>>>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType>
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType|string> = DigitString.Parameter
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>> {

    return DigitParameters(
        (value, valid)=>message({value, valid})
    ) as SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;
}


namespace Digit {
    export const Parameters = DigitParameters;
    export const Parameter = DigitParameter;
}
export default Digit;
