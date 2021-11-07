import NumericValidatable from "../validatable/numeric";
import NumericString from "../assert/string/numeric";
export default function NumericParameter(message = NumericString.Parameters) {
    return function (value) {
        return NumericValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=numeric-parameter.js.map