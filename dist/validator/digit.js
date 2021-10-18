import DigitValidatable from "../validatable/digit";
import DigitString from "../validatable/string/digit";
export default function Digit(message = DigitString) {
    return function (value) {
        return new DigitValidatable(value, message);
    };
}
//# sourceMappingURL=digit.js.map