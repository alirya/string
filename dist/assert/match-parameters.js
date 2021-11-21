import Guard from "../boolean/match-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import MatchError from "./throwable/match";
export default function MatchParameters(value, pattern, error = MatchError.Parameters) {
    Callback(value, Guard, error, pattern);
}
//# sourceMappingURL=match-parameters.js.map