import StringValidatable from "../validatable/string";
import StringString from "../assert/string/string";
export default function StringParameters(message = StringString.Parameters) {
    return function (value) {
        return StringValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=string-parameters.js.map