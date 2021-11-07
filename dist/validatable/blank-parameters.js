import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
export default function BlankParameters(value, message) {
    return ValidatableCallbacks.Function.Parameters(value, NotBlankBoolean, message);
}
//# sourceMappingURL=blank-parameters.js.map