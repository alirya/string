import Guard from '../boolean/string.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import StringError from './throwable/string.js';

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
