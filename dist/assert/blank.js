import Guard from "../boolean/blank";
import Callback from "@dikac/t-function/assert/callback-parameters";
import BlankError from "./throwable/blank";
export default function Blank(value, error = BlankError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=blank.js.map