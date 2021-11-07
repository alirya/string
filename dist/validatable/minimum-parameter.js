import MinimumParameters from "./minimum-parameters";
export default function MinimumParameter({ value, minimum, inclusive, message, converter }) {
    return MinimumParameters(value, minimum, inclusive, (value, valid, minimum, inclusive) => message({ value, valid, minimum, inclusive }), converter);
}
//# sourceMappingURL=minimum-parameter.js.map