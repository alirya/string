import Guard from '../boolean/digit';
import {CallbackParameters} from '@alirya/function/assert/callback';
import DigitError from './throwable/digit';

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
