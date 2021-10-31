import NumericFromObject from "../boolean/numeric";
import Callback from "@dikac/t-validator/validatable/callback";
export default Numeric;
var Numeric;
(function (Numeric) {
    Numeric.Parameter = NumericParameter;
    Numeric.Object = NumericObject;
})(Numeric || (Numeric = {}));
export function NumericParameter(value, message) {
    return Callback(value, NumericFromObject, message);
}
export function NumericObject({ value, message }) {
    return NumericParameter(value, message);
}
//# sourceMappingURL=numeric.js.map