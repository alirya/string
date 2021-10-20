import NumericValidatable from "../validatable/numeric";
import NumericString from "../validatable/string/numeric";
export default function Numeric(message = NumericString) {
    return function (value) {
        return NumericValidatable({ value, message });
    };
}
//# sourceMappingURL=numeric.js.map