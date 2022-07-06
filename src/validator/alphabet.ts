import Validator from '@alirya/validator/validator.js';
import AlphabetValidatable from '../validatable/alphabet.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import AlphabetString from '../assert/string/alphabet.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';

export function AlphabetParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphabetString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


export function AlphabetParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphabetString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable.Parameter({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
}
export default Alphabet;
