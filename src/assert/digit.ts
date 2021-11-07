import Guard from "../boolean/digit";
import Callback from "@dikac/t-function/assert/callback";
import DigitError from "./throwable/digit";

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError.Parameters
) : asserts value is string {

    Callback.Parameter(value, Guard, error);
}
