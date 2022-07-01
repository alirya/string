import Validator from '@alirya/validator/validator';
import AlphanumericValidatable from '../validatable/alphanumeric';
import Instance from '@alirya/validator/validatable/validatable';
import AlphanumericString from '../assert/string/alphanumeric';
import Dynamic from '@alirya/validator/message/function/validatable';

export function AlphanumericParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphanumericString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

}

import SimpleValidator from '@alirya/validator/simple';

export function AlphanumericParameter() : SimpleValidator<string, string, Readonly<Instance<string, string>>>;

export function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;

export function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphanumericString.Parameter
) : SimpleValidator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable.Parameter({value, message});

    } as SimpleValidator<string, string, Readonly<Instance<string, MessageType>>>;

}


namespace Alphanumeric {
    export const Parameters = AlphanumericParameters;
    export const Parameter = AlphanumericParameter;
}
export default Alphanumeric;
