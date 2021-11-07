import Guard from "../boolean/numeric";
import Callback from "@dikac/t-function/assert/callback";
import NumericError from "./throwable/numeric";
export default function Numeric(value, error = NumericError.Parameters) {
    Callback.Parameter(value, Guard, error);
}
//# sourceMappingURL=numeric.js.map