import Guard from "../boolean/empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EmptyError from "./throwable/empty-parameters";

export default function Empty(
    value : string,
    error : (value:string)=>Error = EmptyError
) : asserts value is string {

    Callback(value, Guard, error);
}
