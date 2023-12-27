import Validator from '@axiona/validator/validator.js';
import MatchValidatable from '../validatable/match.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import MatchString from '../assert/string/match.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import Pattern from '../pattern/pattern/pattern.js';
import {StringParameters} from './string.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidFirstValidLast from '@axiona/array/message/message/list/invalid-first-valid-last.js';

export function MatchParameters(
    pattern : RegExp,
) : Validator<string, string, boolean, boolean, string>;

export function MatchParameters<MessageType>(
    pattern : RegExp,
    message : ValidatableParameters<string, MessageType, [pattern:RegExp]>
) : Validator<string, string, boolean, boolean, MessageType>;

export function MatchParameters<MessageType>(
    pattern : RegExp,
    message : ValidatableParameters<string, MessageType|string, [pattern:RegExp]> = MatchString.Parameters
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return ValuePartialParameters([
        StringParameters(),
        (value) => new MatchValidatable.Parameters(value, pattern, message)
    ], AndParameters, InvalidFirstValidLast, false) as Validator<string, string, boolean, boolean, MessageType|string>;
}




export function MatchParameter(
    {pattern} : Pattern,
) : Validator<string, string, boolean, boolean, string>;

export function MatchParameter<MessageType>(
    {
        pattern,
        message
    } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType> & Pattern
) : Validator<string, string, boolean, boolean, MessageType>;

export function MatchParameter<MessageType>(
    {
       pattern,
       message
   } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType|string> & Pattern
) : Validator<string, string, boolean, boolean, MessageType|string> {

    return MatchParameters(
        pattern,
        (value, valid, pattern) => message({value, valid, pattern})
    ) as Validator<string, string, boolean, boolean, MessageType|string>;
}


namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
}
export default Match;
