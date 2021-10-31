import AffixOption from "./affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";
var PadOption;
(function (PadOption) {
    PadOption.Parameter = PadOptionParameter;
    PadOption.Object = PadOptionObject;
})(PadOption || (PadOption = {}));
/**
 * pad string depend on {@param mode}
 * {@see PadPrefix}
 * {@see PadSuffix}
 * {@see PadCircumfix}
 *
 * @param string
 * @param padding
 * @param length
 * @param mode
 */
export function PadOptionParameter(value, padding, length, affix) {
    switch (affix) {
        case AffixOption.PREFIX:
            return PadPrefix.Parameter(value, length, padding);
        case AffixOption.SUFFIX:
            return PadSuffix.Parameter(value, length, padding);
        case AffixOption.CIRCUMFIX:
            return PadCircumfix.Parameter(value, length, padding);
    }
}
export function PadOptionObject({ value, padding, length, affix }) {
    return PadOptionParameter(value, padding, length, affix);
}
export default PadOption;
//# sourceMappingURL=pad-option.js.map