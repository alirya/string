import Guard from "../boolean/not-blank";
import Callback from "@dikac/t-function/assert/callback";
import BlankError from "./throwable/not-blank";

export default function NotBlank(
    value : string,
    error : (value:string)=>Error = BlankError
) : asserts value is string {

    Callback(value, Guard, error);
}
