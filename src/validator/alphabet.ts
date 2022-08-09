import Validator from '@alirya/validator/validator';
import AlphabetValidatable from '../validatable/alphabet';
import Instance from '@alirya/validator/validatable/validatable';
import AlphabetString from '../assert/string/alphabet';
import Dynamic from '@alirya/validator/message/function/validatable';
import {StringParameters} from "./string";
import {ValuePartialParameters} from "../../../array/dist/validator/value-partial";
import {AndParameters} from "../../../array/dist/validatable/and";
import InvalidFirstValidLast from "../../../array/dist/message/message/list/invalid-first-valid-last";

export function AlphabetParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function AlphabetParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphabetString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => AlphabetValidatable.Parameters(value, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


export function AlphabetParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphabetString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return AlphabetParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}


namespace Alphabet {
    export const Parameters = AlphabetParameters;
    export const Parameter = AlphabetParameter;
}
export default Alphabet;
