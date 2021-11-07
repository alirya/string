import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
import MinimumString from "../assert/string/minimum";
export default function MinimumParameters(minimum, inclusive, message = MinimumString.Parameters, converter = Count) {
    return function (value) {
        return MinimumValidatable.Parameters(value, minimum, inclusive, message, converter);
    };
}
//# sourceMappingURL=minimum-parameters.js.map