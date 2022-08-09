import Validator from '@alirya/validator/validator';
import NumericValidatable from '../validatable/numeric';
import Instance from '@alirya/validator/validatable/validatable';
import NumericString from '../assert/string/numeric';
import Dynamic from '@alirya/validator/message/function/validatable';
import {StringParameters} from "./string";
import {ValuePartialParameters} from "../../../array/dist/validator/value-partial";
import {AndParameters} from "../../../array/dist/validatable/and";
import {OrParameters} from "../../../array/dist/validatable/or";
import InvalidFirstValidLast from "../../../array/dist/message/message/list/invalid-first-valid-last";
import {NumberParameters} from "../../../number/dist/validator/number";

export function NumericParameters() : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<string, string>>>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<unknown, MessageType>
) : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<string|number, MessageType>>>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<unknown, MessageType|string> = NumericString.Parameters
) : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return ValuePartialParameters([

        ValuePartialParameters([
            StringParameters(),
            NumberParameters(),
        ], OrParameters, InvalidFirstValidLast, true),

        (value) => NumericValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<unknown, string|number, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


export function NumericParameter() : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<unknown, string>>>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<unknown, MessageType|string>
) : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<unknown, MessageType>>>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<unknown, MessageType|string> = NumericString.Parameter
) : Validator<unknown, string|number, boolean, boolean, Readonly<Instance<unknown, MessageType>>> {

    return NumericParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<unknown, string|number, boolean, boolean, Readonly<Instance<unknown, MessageType>>>;
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
