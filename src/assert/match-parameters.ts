import Guard from "../boolean/match-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import MatchError from "./throwable/match";

export default function MatchParameters(
    value : string,
    pattern : RegExp,
    error : (value:string, pattern:RegExp)=>Error = MatchError.Parameters
) : asserts value is string {

    Callback(value, Guard, error, pattern);
}
