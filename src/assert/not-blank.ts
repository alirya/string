import Guard from '../boolean/not-blank';
import Callback from '@alirya/function/assert/callback-parameters';
import BlankError from './throwable/not-blank-parameters';

export default function NotBlank(
    value : string,
    error : (value:string)=>Error = BlankError
) : asserts value is string {

    Callback(value, Guard, error);
}
