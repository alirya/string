import MaximumValidatable from "../validatable/maximum";
import Count from "../number/count";
export default function Maximum(maximum, inclusive, message, converter = Count) {
    return function (value) {
        return new MaximumValidatable(value, maximum, inclusive, message, converter);
    };
}
//# sourceMappingURL=maximum.js.map