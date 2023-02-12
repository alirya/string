import Guard from '../boolean/blank.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import BlankError from './throwable/blank.js';

export default function Blank(
    value : string,
    error : (value:string)=>Error = BlankError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
