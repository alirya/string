import Guard from "../boolean/alphanumeric";
import Callback from "@dikac/t-function/assert/callback";
import AlphanumericError from "./throwable/alphanumeric";
export default function Alphanumeric(value, error = AlphanumericError.Parameters) {
    Callback.Parameter(value, Guard, error);
}
//# sourceMappingURL=alphanumeric.js.map