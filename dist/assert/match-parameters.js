import Guard from "../boolean/match";
import Callback from "@dikac/t-function/assert/callback";
import MatchError from "./throwable/match";
export default function MatchParameters(value, pattern, error = MatchError.Parameters) {
    Callback.Parameter(value, Guard.Parameter, error, pattern);
}
//# sourceMappingURL=match-parameters.js.map