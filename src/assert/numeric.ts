import Guard from "../boolean/numeric";
import Callback from "@alirya/function/assert/callback-parameters";
import NumericError from "./throwable/numeric-parameters";

export default function Numeric(
    value : string,
    error : (value:string)=>Error = NumericError
) : asserts value is string {

    Callback(value, Guard, error);
}
