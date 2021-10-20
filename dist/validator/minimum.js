import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
import MinimumString from "../validatable/string/minimum";
export default function Minimum({ minimum, inclusive, message = MinimumString, converter = Count }) {
    return function (value) {
        return MinimumValidatable({ value, minimum, inclusive, message, converter });
    };
}
//# sourceMappingURL=minimum.js.map