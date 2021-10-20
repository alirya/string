import MaximumValidatable from "../validatable/maximum";
import Count from "../number/count";
import MaximumString from "../validatable/string/maximum";
export default function Maximum({ maximum, inclusive, message = MaximumString, converter = Count, }) {
    return function (value) {
        return MaximumValidatable({ value, maximum, inclusive, message, converter });
    };
}
//# sourceMappingURL=maximum.js.map