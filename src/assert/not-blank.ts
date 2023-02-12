import Guard from '../boolean/not-blank.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import BlankError from './throwable/not-blank.js';

export default function NotBlank(
    value : string,
    error : (value:string)=>Error = BlankError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
