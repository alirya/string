import BlankParameters from "./blank-parameters";
export default function BlankParameter({ value, message }) {
    return BlankParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=blank-parameter.js.map