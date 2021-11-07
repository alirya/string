import DigitValidatable from "../validatable/digit";
import DigitString from "../assert/string/digit";
export default function DigitParameters(message = DigitString.Parameters) {
    return function (value) {
        return DigitValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=digit-parameters.js.map