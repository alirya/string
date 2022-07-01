import Guard from '../boolean/not-empty';
import {CallbackParameters} from '@alirya/function/assert/callback';
import EmptyError from './throwable/not-empty';

export default function NotEmpty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
