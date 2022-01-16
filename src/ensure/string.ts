import AssertString from '../assert/string';
import StringError from '../assert/throwable/string-parameters';

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError
) : string {

    AssertString(value, error);

    return value;
}
