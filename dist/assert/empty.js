import Guard from "../boolean/empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import EmptyError from "./throwable/empty";
export default function Empty(value, error = EmptyError.Parameter) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=empty.js.map