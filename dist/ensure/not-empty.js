import AssertNotEmpty from "../assert/not-empty";
import NotEmptyError from "../assert/throwable/not-empty";
export default function NotEmpty(value, error = NotEmptyError) {
    AssertNotEmpty(value, error);
    return value;
}
//# sourceMappingURL=not-empty.js.map