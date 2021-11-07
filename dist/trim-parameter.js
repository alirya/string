import TrimParameters from "./trim-parameters";
export default function TrimParameter({ value, circumfix, prefix, suffix }) {
    return TrimParameters(value, circumfix || prefix, suffix);
}
//# sourceMappingURL=trim-parameter.js.map