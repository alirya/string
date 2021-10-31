import { padStart } from "lodash";
var PadPrefix;
(function (PadPrefix) {
    PadPrefix.Parameter = PadPrefixParameter;
    PadPrefix.Object = PadPrefixObject;
})(PadPrefix || (PadPrefix = {}));
/**
 * @see padStart
 */
export function PadPrefixParameter(value, length, prefix) {
    return padStart(value, length, prefix);
}
export function PadPrefixObject({ value, length, prefix }) {
    return PadPrefixParameter(value, length, prefix);
}
export default PadPrefix;
//# sourceMappingURL=pad-prefix.js.map