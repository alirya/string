import Guard from "../boolean/not-blank";
import Callback from "@dikac/t-function/assert/callback-parameters";
import BlankError from "./throwable/not-blank";
export default function NotBlank(value, error = BlankError.Parameters) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-blank.js.map