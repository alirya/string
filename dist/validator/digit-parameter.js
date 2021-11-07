import DigitValidatable from "../validatable/digit";
import DigitString from "../assert/string/digit";
export default function DigitParameter(message = DigitString.Parameter) {
    return function (value) {
        return DigitValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=digit-parameter.js.map