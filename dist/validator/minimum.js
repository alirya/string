import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
export default function Minimum(minimum, inclusive, message, converter = Count) {
    return function (value) {
        return new MinimumValidatable(value, minimum, inclusive, message, converter);
    };
}
//# sourceMappingURL=minimum.js.map