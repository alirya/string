import Guard from "../boolean/blank";
import Callback from "@dikac/t-function/assert/callback";
import BlankError from "./throwable/blank";
export default function Blank(value, error = BlankError.Parameters) {
    Callback.Parameter(value, Guard, error);
}
//# sourceMappingURL=blank.js.map