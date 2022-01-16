import Guard from '../boolean/match-parameters';
import Callback from '@alirya/function/assert/callback-parameters';
import MatchError from './throwable/match-parameters';

export default function MatchParameters(
    value : string,
    pattern : RegExp,
    error : (value:string, pattern:RegExp)=>Error = MatchError
) : asserts value is string {

    Callback(value, Guard, error, pattern);
}
