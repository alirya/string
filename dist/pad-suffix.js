import { padEnd } from "lodash";
var PadSuffix;
(function (PadSuffix) {
    PadSuffix.Parameter = PadSuffixParameter;
    PadSuffix.Object = PadSuffixObject;
})(PadSuffix || (PadSuffix = {}));
/**
 * @see padEnd
 */
export function PadSuffixParameter(string, length, suffix) {
    return padEnd(string, length, suffix);
}
export function PadSuffixObject({ value, length, suffix }) {
    return PadSuffixParameter(value, length, suffix);
}
export default PadSuffix;
//# sourceMappingURL=pad-suffix.js.map