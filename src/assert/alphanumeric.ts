import Guard from '../boolean/alphanumeric';
import {CallbackParameters} from '@alirya/function/assert/callback';
import AlphanumericError from './throwable/alphanumeric';

export default function Alphanumeric(
    value : string,
    error : (value:string)=>Error = AlphanumericError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
