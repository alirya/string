import AssertString from "../assert/string";
import StringError from "../assert/throwable/string";
export default function String(value, error = StringError.Parameters) {
    AssertString(value, error);
    return value;
}
//# sourceMappingURL=string.js.map