import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@dikac/t-validator/validatable/callback";
export default NotBlank;
var NotBlank;
(function (NotBlank) {
    NotBlank.Parameter = NotBlankParameter;
    NotBlank.Object = NotBlankObject;
})(NotBlank || (NotBlank = {}));
export function NotBlankParameter(value, message) {
    return Callback(value, NotBlankBoolean, message);
}
export function NotBlankObject({ value, message }) {
    return NotBlankParameter(value, message);
}
//# sourceMappingURL=not-blank.js.map