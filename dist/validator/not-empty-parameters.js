import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
export default function NotEmptyParameters(message = NotEmptyString.Parameters) {
    return function (value) {
        return NotEmptyValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=not-empty-parameters.js.map