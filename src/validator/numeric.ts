import Validator from '@alirya/validator/validator';
import NumericValidatable from '../validatable/numeric';
import Instance from '@alirya/validator/validatable/validatable';
import NumericString from '../assert/string/numeric';
import Dynamic from '@alirya/validator/message/function/validatable';
import {StringParameters} from "./string";
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import {OrParameters} from '@alirya/array/validatable/or';
import InvalidFirstValidLast from '@alirya/array/message/message/list/invalid-first-valid-last';
import {NumberParameters} from '@alirya/number/validator/number';
import Chain from '../../../validator/dist/chain';
import {TypeInParameters} from '../../../type/dist/validator/type-in';

export function NumericParameters() : Validator<unknown, string|number, boolean, boolean, string>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<unknown, MessageType>
) : Validator<unknown, string|number, boolean, boolean, string>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<unknown, MessageType|string> = NumericString.Parameters
) : Validator<unknown, string|number, boolean, boolean, string|MessageType> {

    return Chain(TypeInParameters(['string', 'number']), function (value) {

        return NumericValidatable.Parameters(value, message);
    });

    // return ValuePartialParameters([
    //
    //     ValuePartialParameters([
    //         StringParameters(),
    //         NumberParameters(),
    //     ], OrParameters, InvalidFirstValidLast, true),
    //
    //     (value) => NumericValidatable.Parameters(value, message)
    // ], AndParameters, InvalidFirstValidLast, false) as Validator<unknown, string|number, boolean, boolean, string|MessageType>;
}


export function NumericParameter() : Validator<unknown, string|number, boolean, boolean, string>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<unknown, MessageType|string>
) : Validator<unknown, string|number, boolean, boolean, MessageType>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<unknown, MessageType|string> = NumericString.Parameter
) : Validator<unknown, string|number, boolean, boolean, MessageType|string> {

    return NumericParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<unknown, string|number, boolean, boolean, MessageType|string>;
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
