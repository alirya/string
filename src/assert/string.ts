import Guard from '../boolean/string';
import {CallbackParameters} from '@alirya/function/assert/callback';
import StringError from './throwable/string';

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
