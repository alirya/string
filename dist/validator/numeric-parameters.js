import NumericValidatable from "../validatable/numeric";
import NumericString from "../assert/string/numeric";
export default function NumericParameters(message = NumericString.Parameters) {
    return function (value) {
        return NumericValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=numeric-parameters.js.map