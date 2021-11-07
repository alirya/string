import AlphanumericValidatable from "../validatable/alphanumeric";
import AlphanumericString from "../assert/string/alphanumeric";
export default function AlphanumericParameter(message = AlphanumericString.Parameter) {
    return function (value) {
        return AlphanumericValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=alphanumeric-parameter.js.map