import Guard from "../boolean/minimum";
import Callback from "@dikac/t-function/assert/callback";
import MinimumError from "./throwable/minimum";
import Count from "../number/count";
export default function MinimumParameters(value, minimum, inclusive, converter = Count, error = MinimumError.Parameters) {
    let guard = (value, minimum, inclusive) => {
        return Guard.Parameters(value, minimum, inclusive, converter);
    };
    Callback.Parameter(value, guard, error, minimum, inclusive);
}
//# sourceMappingURL=minimum-parameters.js.map