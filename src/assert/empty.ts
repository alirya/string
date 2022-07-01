import Guard from '../boolean/empty';
import {CallbackParameters} from '@alirya/function/assert/callback';
import EmptyError from './throwable/empty';

export default function Empty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
