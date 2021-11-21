import Guard from "../boolean/digit";
import Callback from "@dikac/t-function/assert/callback-parameters";
import DigitError from "./throwable/digit";

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError.Parameters
) : asserts value is string {

    Callback(value, Guard, error);
}
