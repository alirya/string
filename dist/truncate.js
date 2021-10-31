import { truncate } from "lodash";
var Truncate;
(function (Truncate) {
    Truncate.Parameter = TruncateParameter;
    Truncate.Object = TruncateObject;
})(Truncate || (Truncate = {}));
export function TruncateParameter(value, length, omission = '...', separator) {
    return truncate(value, {
        length: length,
        omission: omission,
        separator: separator
    });
}
/**
 * wrapper for {@see truncate}
 *
 * @param string
 * @param length
 * @param omission
 * @default "..."
 *
 * @param separator
 */
export function TruncateObject({ value, length, omission = "...", separator }) {
    return TruncateParameter(value, length, omission, separator);
}
export default Truncate;
//# sourceMappingURL=truncate.js.map