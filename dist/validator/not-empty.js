import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../validatable/string/not-empty";
export default function NotEmpty(message = NotEmptyString) {
    return function (value) {
        return NotEmptyValidatable({ value, message });
    };
}
//# sourceMappingURL=not-empty.js.map