import AssertNotEmpty from "../assert/not-empty";
import NotEmptyError from "../assert/throwable/not-empty-parameters";

export default function NotEmpty(
    value : string,
    error : (value:unknown)=>Error = NotEmptyError
) : string {

    AssertNotEmpty(value, error);

    return value;
}
