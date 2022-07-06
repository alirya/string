import Validator from '@alirya/validator/validator.js';
import DigitValidatable from '../validatable/digit.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import DigitString from '../assert/string/digit.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';

export function DigitParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = DigitString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}

import SimpleValidator from '@alirya/validator/simple.js';

export function DigitParameter() : SimpleValidator<string, string, Readonly<Instance<string, string>>>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType>
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;

export function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType|string> = DigitString.Parameter
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable.Parameter({value, message});

    } as SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;
}


namespace Digit {
    export const Parameters = DigitParameters;
    export const Parameter = DigitParameter;
}
export default Digit;
