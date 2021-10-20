import NumericFromObject from "../boolean/numeric";
import Callback from "@dikac/t-validator/validatable/callback";
export default function Numeric({ value, message }) {
    return Callback(value, NumericFromObject, message);
}
//# sourceMappingURL=numeric.js.map