import NumericFromObject from "../boolean/numeric";
import Callback from "@dikac/t-validator/validatable/callback";
export default function NumericParameters(value, message) {
    return Callback.Function.Parameters(value, NumericFromObject, message);
}
//# sourceMappingURL=numeric-parameters.js.map