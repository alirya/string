import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@dikac/t-validator/validatable/callback";
export default function NotBlank({ value, message }) {
    return Callback(value, NotBlankBoolean, message);
}
//# sourceMappingURL=not-blank.js.map