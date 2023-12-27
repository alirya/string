import Guard from '../boolean/numeric.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import NumericError from './throwable/numeric.js';

export default function Numeric(
    value : unknown,
    error : (value:string)=>Error = NumericError.Parameters
) : asserts value is string|number {

    CallbackParameters(value, Guard, error);
}
