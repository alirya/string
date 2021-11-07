import StringValidatable from "../validatable/string";
import StringString from "../assert/string/string";
export default function StringParameter(message = StringString.Parameter) {
    return function (value) {
        return StringValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=string-parameter.js.map