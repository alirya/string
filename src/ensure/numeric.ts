import AssertNumeric from '../assert/numeric';
import NumericError from '../assert/throwable/numeric';

export default function Numeric(
    value : string|number,
    error : (value:unknown)=>Error = NumericError.Parameters
) : string|number {

    AssertNumeric(value, error);

    return value;
}
