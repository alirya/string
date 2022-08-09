import AssertNumeric from '../assert/numeric';
import NumericError from '../assert/throwable/numeric';

export default function Numeric(
    value : string,
    error : (value:unknown)=>Error = NumericError.Parameters
) : string {

    AssertNumeric(value, error);

    return value;
}
