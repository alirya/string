import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
export default function EmptyParameters(message = EmptyString.Parameters) {
    return function (value) {
        return EmptyValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=empty-parameters.js.map