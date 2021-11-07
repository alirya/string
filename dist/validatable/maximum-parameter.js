import MaximumParameters from "./maximum-parameters";
export default function MaximumParameter({ value, maximum, inclusive, message, converter }) {
    return MaximumParameters(value, maximum, inclusive, (value, valid, maximum, inclusive, converter) => message({ value, valid, maximum, inclusive, converter }), converter);
}
//# sourceMappingURL=maximum-parameter.js.map