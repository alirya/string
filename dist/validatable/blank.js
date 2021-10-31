import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
export default Blank;
var Blank;
(function (Blank) {
    Blank.Parameter = BlankParameter;
    Blank.Object = BlankObject;
})(Blank || (Blank = {}));
export function BlankParameter(value, message) {
    return ValidatableCallbacks(value, NotBlankBoolean, message);
}
export function BlankObject({ value, message }) {
    return BlankParameter(value, message);
}
//# sourceMappingURL=blank.js.map