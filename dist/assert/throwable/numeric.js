import NumericType from "../string/numeric";
export default function Numeric({ value, subject = 'string' }) {
    return new Error(NumericType(false, value, subject));
}
//# sourceMappingURL=numeric.js.map