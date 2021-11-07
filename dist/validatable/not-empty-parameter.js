import NotEmptyParameters from "./not-empty-parameters";
export default function NotEmptyParameter({ value, message }) {
    return NotEmptyParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=not-empty-parameter.js.map