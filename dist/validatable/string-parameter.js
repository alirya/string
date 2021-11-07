import StringParameters from "./string-parameters";
export default function StringParameter({ value, message }) {
    return StringParameters(value, (value, valid) => message({ valid, value }));
}
//# sourceMappingURL=string-parameter.js.map