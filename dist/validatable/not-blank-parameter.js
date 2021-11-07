import NotBlankParameters from "./not-blank-parameters";
export default function NotBlankParameter({ value, message }) {
    return NotBlankParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=not-blank-parameter.js.map