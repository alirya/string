import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EmptyError from "./throwable/not-empty";

export default function NotEmpty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameters
) : asserts value is string {

    Callback(value, Guard, error);
}
