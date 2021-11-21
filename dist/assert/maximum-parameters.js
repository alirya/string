import Guard from "../boolean/maximum";
import Callback from "@dikac/t-function/assert/callback-parameters";
import MaximumError from "./throwable/maximum";
import Count from "../number/count";
export default function MaximumParameters(value, maximum, inclusive, converter = Count, error = MaximumError.Parameters) {
    let guard = (value, maximum, inclusive) => {
        return Guard.Parameters(value, maximum, inclusive, converter);
    };
    Callback(value, guard, error, maximum, inclusive);
}
//# sourceMappingURL=maximum-parameters.js.map