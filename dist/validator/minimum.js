import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
import MinimumString from "../assert/string/minimum";
export function MinimumParameter(minimum, inclusive, message = MinimumString.Object, converter = Count) {
    return function (value) {
        return new MinimumValidatable.Parameter(value, minimum, inclusive, message, converter);
    };
}
export default function Minimum({ minimum, inclusive, message = MinimumString, converter = Count }) {
    return function (value) {
        return MinimumValidatable({ value, minimum, inclusive, message, converter });
    };
}
//# sourceMappingURL=minimum.js.map