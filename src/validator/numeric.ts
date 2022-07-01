import Validator from '@alirya/validator/validator';
import NumericValidatable from '../validatable/numeric';
import Instance from '@alirya/validator/validatable/validatable';
import NumericString from '../assert/string/numeric';
import Dynamic from '@alirya/validator/message/function/validatable';

export function NumericParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function NumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = NumericString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


export function NumericParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function NumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = NumericString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable.Parameter({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


namespace Numeric {
    export const Parameters = NumericParameters;
    export const Parameter = NumericParameter;
}
export default Numeric;
