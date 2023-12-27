import Guard from '../boolean/alphanumeric.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import AlphanumericError from './throwable/alphanumeric.js';

export default function Alphanumeric(
    value : string,
    error : (value:string)=>Error = AlphanumericError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
