import Guard from '../boolean/numeric';
import {CallbackParameters} from '@alirya/function/assert/callback';
import NumericError from './throwable/numeric';

export default function Numeric(
    value : string|number,
    error : (value:string)=>Error = NumericError.Parameters
) : asserts value is string|number {

    CallbackParameters(value, Guard, error);
}
