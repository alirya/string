import Guard from "../boolean/match";
import Callback from "@dikac/t-function/assert/callback";
import MatchError from "./throwable/match";

export default function MatchParameters(
    value : string,
    pattern : RegExp,
    error : (value:string, pattern:RegExp)=>Error = MatchError.Parameters
) : asserts value is string {

    Callback.Parameter(value, Guard.Parameter, error, pattern);
}
