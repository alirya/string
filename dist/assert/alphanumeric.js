import Guard from "../boolean/alphanumeric";
import Callback from "@dikac/t-function/assert/callback-parameters";
import AlphanumericError from "./throwable/alphanumeric";
export default function Alphanumeric(value, error = AlphanumericError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=alphanumeric.js.map