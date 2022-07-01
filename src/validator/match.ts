import Validator from '@alirya/validator/validator';
import MatchValidatable from '../validatable/match';
import Instance from '@alirya/validator/validatable/validatable';
import MatchString from '../assert/string/match';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Pattern from '../pattern/pattern/pattern';

export function MatchParameters(
    pattern : RegExp,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function MatchParameters<MessageType>(
    pattern : RegExp,
    message : ValidatableParameters<string, MessageType, [pattern:RegExp]>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function MatchParameters<MessageType>(
    pattern : RegExp,
    message : ValidatableParameters<string, MessageType|string, [pattern:RegExp]> = MatchString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return new MatchValidatable.Parameters(value, pattern, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}




export function MatchParameter(
    {pattern} : Pattern,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function MatchParameter<MessageType>(
    {
        pattern,
        message
    } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function MatchParameter<MessageType>(
    {
       pattern,
       message
   } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType|string> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return MatchParameters(
        pattern,
        (value, valid, pattern) => message({value, valid, pattern})
    ) as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}


namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
}
export default Match;
