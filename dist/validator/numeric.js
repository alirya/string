import NumericValidatable from "../validatable/numeric";
import NumericString from "../assert/string/numeric";
export function NumericObject(message = NumericString.Object) {
    return function (value) {
        return NumericValidatable.Object({ value, message });
    };
}
export function NumericVoid() {
    return NumericParameter();
}
export function NumericParameter(message = NumericString.Parameter) {
    return function (value) {
        return NumericValidatable.Parameter(value, message);
    };
}
//# sourceMappingURL=numeric.js.map