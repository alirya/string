import AlphanumericValidatable from "../validatable/alphanumeric";
import AlphanumericString from "../assert/string/alphanumeric";
export default function AlphanumericParameters(message = AlphanumericString.Parameters) {
    return function (value) {
        return AlphanumericValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=alphanumeric-parameters.js.map