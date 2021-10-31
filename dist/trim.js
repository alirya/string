import { trim } from "lodash";
import TrimSuffix from "./trim-suffix";
var Trim;
(function (Trim) {
    Trim.Parameter = TrimParameter;
    Trim.Object = TrimObject;
})(Trim || (Trim = {}));
/**
 * @see trim
 */
export function TrimParameter(value, prefix, suffix, circumfix) {
    value = circumfix === undefined ? value : trim(value, circumfix);
    value = prefix === undefined ? value : Trim.Parameter(value, prefix);
    value = suffix === undefined ? value : TrimSuffix.Parameter(value, suffix);
    return value;
}
export function TrimObject({ value, circumfix, prefix, suffix }) {
    return TrimParameter(value, prefix, suffix, circumfix);
}
export default Trim;
//# sourceMappingURL=trim.js.map