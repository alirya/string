import Guard from "../boolean/digit";
import Callback from "@dikac/t-function/assert/callback-parameters";
import DigitError from "./throwable/digit";
export default function Digit(value, error = DigitError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=digit.js.map