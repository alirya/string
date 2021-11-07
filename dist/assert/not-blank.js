import Guard from "../boolean/not-blank";
import Callback from "@dikac/t-function/assert/callback";
import BlankError from "./throwable/not-blank";
export default function NotBlank(value, error = BlankError.Parameters) {
    Callback.Parameter(value, Guard, error);
}
//# sourceMappingURL=not-blank.js.map