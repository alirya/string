import MaximumParameters from "./maximum-parameters";
export default function MaximumParameter({ maximum, inclusive, message, converter, }) {
    if (message) {
        return MaximumParameters(maximum, inclusive, (value, valid, maximum, inclusive) => message({ value, valid, maximum, inclusive }), converter);
    }
    else {
        return MaximumParameters(maximum, inclusive, message, converter);
    }
}
//# sourceMappingURL=maximum-parameter.js.map