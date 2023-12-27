import Guard from '../boolean/not-empty.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import EmptyError from './throwable/not-empty.js';

export default function NotEmpty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
