import NotBlankBoolean from "../boolean/not-blank";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
export default function NotBlank(value, message) {
    return ValidatableCallbacks(value, NotBlankBoolean, message);
}
//# sourceMappingURL=not-blank.js.map