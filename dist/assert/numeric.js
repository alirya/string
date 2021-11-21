import Guard from "../boolean/numeric";
import Callback from "@dikac/t-function/assert/callback-parameters";
import NumericError from "./throwable/numeric";
export default function Numeric(value, error = NumericError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=numeric.js.map