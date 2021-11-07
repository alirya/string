import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@dikac/t-validator/validatable/callback";
export default function NotBlankParameters(value, message) {
    return Callback.Function.Parameters(value, NotBlankBoolean, message);
}
//# sourceMappingURL=not-blank-parameters.js.map