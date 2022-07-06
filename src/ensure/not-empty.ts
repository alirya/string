import AssertNotEmpty from '../assert/not-empty.js';
import NotEmptyError from '../assert/throwable/not-empty.js';

export default function NotEmpty(
    value : string,
    error : (value:unknown)=>Error = NotEmptyError.Parameters
) : string {

    AssertNotEmpty(value, error);

    return value;
}
