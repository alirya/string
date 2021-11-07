import MaximumValidatable from "../validatable/maximum";
import Count from "../number/count";
import MaximumString from "../assert/string/maximum";
export default function MaximumParameters(maximum, inclusive, message = MaximumString.Parameters, converter = Count) {
    return function (value) {
        return MaximumValidatable.Parameters(value, maximum, inclusive, message, converter);
    };
}
//# sourceMappingURL=maximum-parameters.js.map