import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";
export default String;
var String;
(function (String) {
    String.Parameter = StringParameter;
    String.Object = StringObject;
})(String || (String = {}));
export function StringParameter(value, message) {
    return Callback.Function.Parameter(value, StringGuard, message);
}
export function StringObject({ value, message }) {
    return StringParameter(value, message);
}
//# sourceMappingURL=string.js.map