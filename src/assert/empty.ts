import Guard from '../boolean/empty.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import EmptyError from './throwable/empty.js';

export default function Empty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
