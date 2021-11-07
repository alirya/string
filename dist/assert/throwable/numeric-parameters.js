import NumericType from "../string/numeric";
export default function NumericParameters(value, subject = 'string') {
    return new Error(NumericType.Parameters(value, false, subject));
}
//# sourceMappingURL=numeric-parameters.js.map