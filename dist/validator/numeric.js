import NumericValidatable from "../validatable/numeric";
export default function Numeric(message) {
    return function (value) {
        return new NumericValidatable(value, message);
    };
}
//# sourceMappingURL=numeric.js.map