import { trimEnd } from "lodash";
export const TrimSuffixParameter = trimEnd;
var TrimSuffix;
(function (TrimSuffix) {
    TrimSuffix.Parameter = TrimSuffixParameter;
    TrimSuffix.Object = TrimSuffixObject;
})(TrimSuffix || (TrimSuffix = {}));
export function TrimSuffixObject({ value, suffix }) {
    return TrimSuffixParameter(value, suffix);
}
export default TrimSuffix;
//# sourceMappingURL=trim-suffix.js.map