import Guard from "../boolean/string";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/string";
export default function String(value, error = StringError.Parameters) {
    Callback.Parameter(value, Guard, error);
}
//# sourceMappingURL=string.js.map