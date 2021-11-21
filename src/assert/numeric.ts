import Guard from "../boolean/numeric";
import Callback from "@dikac/t-function/assert/callback-parameters";
import NumericError from "./throwable/numeric";

export default function Numeric(
    value : string,
    error : (value:string)=>Error = NumericError.Parameters
) : asserts value is string {

    Callback(value, Guard, error);
}
