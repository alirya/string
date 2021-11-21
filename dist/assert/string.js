import Guard from "../boolean/string";
import Callback from "@dikac/t-function/assert/callback-parameters";
import StringError from "./throwable/string";
export default function String(value, error = StringError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=string.js.map