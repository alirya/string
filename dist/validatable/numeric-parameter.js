import NumericParameters from "./numeric-parameters";
export default function NumericParameter({ value, message }) {
    return NumericParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=numeric-parameter.js.map