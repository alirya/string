import Guard from '../boolean/digit.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import DigitError from './throwable/digit.js';

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
