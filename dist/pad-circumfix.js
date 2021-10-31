import { pad } from "lodash";
var PadCircumfix;
(function (PadCircumfix) {
    PadCircumfix.Parameter = PadCircumfixParameter;
    PadCircumfix.Object = PadCircumfixObject;
})(PadCircumfix || (PadCircumfix = {}));
/**
 * @see pad
 */
export function PadCircumfixParameter(value, length, circumfix) {
    return pad(value, length, circumfix);
}
export function PadCircumfixObject({ value, length, circumfix }) {
    return pad(value, length, circumfix);
}
export default PadCircumfix;
//# sourceMappingURL=pad-circumfix.js.map