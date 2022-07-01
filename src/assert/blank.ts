import Guard from '../boolean/blank';
import {CallbackParameters} from '@alirya/function/assert/callback';
import BlankError from './throwable/blank';

export default function Blank(
    value : string,
    error : (value:string)=>Error = BlankError.Parameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
