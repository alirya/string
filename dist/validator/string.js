import StringValidatable from "../validatable/string";
import StringString from "../assert/string/string";
export function StringObject(message = StringString.Object) {
    return function (value) {
        return StringValidatable.Object({ value, message });
    };
}
export function StringVoid() {
    return StringObject(StringString.Object);
}
export function StringParameter(message = StringString.Parameter) {
    return function (value) {
        return StringValidatable.Parameter(value, message);
    };
}
var String;
(function (String) {
    String.Parameter = StringParameter;
    String.Object = StringObject;
    String.Void = StringVoid;
})(String || (String = {}));
export default String;
//# sourceMappingURL=string.js.map