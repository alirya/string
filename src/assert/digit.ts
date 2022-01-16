import Guard from '../boolean/digit';
import Callback from '@alirya/function/assert/callback-parameters';
import DigitError from './throwable/digit-parameters';

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError
) : asserts value is string {

    Callback(value, Guard, error);
}
