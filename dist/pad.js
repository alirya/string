import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
var Pad;
(function (Pad) {
    Pad.Parameter = PadParameter;
    Pad.Object = PadObject;
})(Pad || (Pad = {}));
export function PadParameter(value, length, prefix, suffix) {
    value = PadPrefix.Parameter(value, length, prefix);
    value = PadSuffix.Parameter(value, length, suffix || prefix);
    return value;
}
export function PadObject({ value, length, prefix, suffix, circumfix }) {
    return PadParameter(value, length, circumfix || prefix, circumfix || suffix);
}
export default Pad;
//# sourceMappingURL=pad.js.map