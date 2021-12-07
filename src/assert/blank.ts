import Guard from "../boolean/blank";
import Callback from "@dikac/t-function/assert/callback-parameters";
import BlankError from "./throwable/blank-parameters";

export default function Blank(
    value : string,
    error : (value:string)=>Error = BlankError
) : asserts value is string {

    Callback(value, Guard, error);
}
