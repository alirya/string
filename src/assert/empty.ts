import Guard from "../boolean/empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : string,
    error : (value:string)=>Error = EmptyError.Parameter
) : asserts value is string {

    Callback(value, Guard, error);
}
