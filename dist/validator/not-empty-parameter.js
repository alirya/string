import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
export default function NotEmptyParameter(message = NotEmptyString.Parameter) {
    return function (value) {
        return NotEmptyValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=not-empty-parameter.js.map