import { trimStart } from "lodash";
export const TrimPrefixParameter = trimStart;
var TrimPrefix;
(function (TrimPrefix) {
    TrimPrefix.Parameter = TrimPrefixParameter;
    TrimPrefix.Object = TrimPrefixObject;
})(TrimPrefix || (TrimPrefix = {}));
export function TrimPrefixObject({ value, prefix }) {
    return TrimPrefixParameter(value, prefix);
}
export default TrimPrefix;
//# sourceMappingURL=trim-prefix.js.map