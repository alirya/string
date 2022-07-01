import Guard from '../boolean/not-blank';
import {CallbackParameters} from '@alirya/function/assert/callback';
import BlankError from './throwable/not-blank';

export default function NotBlank(
    value : string,
    error : (value:string)=>Error = BlankError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
