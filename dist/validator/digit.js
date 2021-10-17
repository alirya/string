import DigitValidatable from "../validatable/digit";
export default function Digit(message) {
    return function (value) {
        return new DigitValidatable(value, message);
    };
}
//# sourceMappingURL=digit.js.map