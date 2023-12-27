import Validator from '@axiona/validator/validator.js';
import NumericValidatable from '../validatable/numeric.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import NumericString from '../assert/string/numeric.js';
import Dynamic from '@axiona/validator/message/function/validatable.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import {OrParameters} from '@axiona/array/validatable/or.js';
import InvalidFirstValidLast from '@axiona/array/message/message/list/invalid-first-valid-last.js';
import {NumberParameters} from '@axiona/number/validator/number.js';
import Chain from '@axiona/validator/chain.js';
import {TypeInParameters} from '@axiona/type/validator/type-in.js';

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
