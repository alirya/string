import Guard from '../boolean/match.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import MatchError from './throwable/match.js';
import Value from '@axiona/value/value.js';
import Pattern from '../pattern/pattern/pattern.js';

export function MatchParameters(
    value : string,
    pattern : RegExp,
    error : (value:string, pattern:RegExp)=>Error = MatchError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard.Parameters, error, pattern);
}



export type MatchArgument = Pattern & {

    error ?: (argument:Value<string> & Pattern)=>Error
};

export function MatchParameter(
    value : string,
    {
        pattern,
        error,
    } : MatchArgument
) : asserts value is string {

    MatchParameters(
        value,
        pattern,
        error ? (value, pattern) => error({value, pattern}) : error
    );
}





namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
    export type Argument = MatchArgument;
}
export default Match;
