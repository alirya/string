import Guard from "../boolean/string";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/string";

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : asserts value is string {

    Callback.Parameter(value, Guard, error);
}
