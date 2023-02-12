import AssertNumeric from '../assert/numeric.js';
import NumericError from '../assert/throwable/numeric.js';

export default function Numeric(
    value : unknown,
    error : (value:unknown)=>Error = NumericError.Parameters
) : string|number {

    AssertNumeric(value, error);

    return value;
}
