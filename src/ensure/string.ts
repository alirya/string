import AssertString from "../assert/string";
import StringError from "../assert/throwable/string";

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : string {

    AssertString(value, error);

    return value;
}
