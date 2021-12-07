import Guard from "../boolean/string";
import Callback from "@dikac/t-function/assert/callback-parameters";
import StringError from "./throwable/string-parameters";

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringError
) : asserts value is string {

    Callback(value, Guard, error);
}
