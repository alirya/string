import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
export default function EmptyParameter(message = EmptyString.Parameter) {
    return function (value) {
        return EmptyValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=empty-parameter.js.map