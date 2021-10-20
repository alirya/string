import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
export default function Blank({ value, message }) {
    return ValidatableCallbacks(value, NotBlankBoolean, message);
}
//# sourceMappingURL=blank.js.map