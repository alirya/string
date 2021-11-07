import AlphanumericParameters from "./alphanumeric-parameters";
export default function AlphanumericParameter({ value, message }) {
    return AlphanumericParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=alphanumeric-parameter.js.map