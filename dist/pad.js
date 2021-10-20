import AffixOption from "./affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";
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
export default function Pad({ string, padding, length, affix }) {
    switch (affix) {
        case AffixOption.PREFIX:
            return PadPrefix({ string, length, prefix: padding });
        case AffixOption.SUFFIX:
            return PadSuffix({ string, length, suffix: padding });
        case AffixOption.CIRCUMFIX:
            return PadCircumfix({ string, length, circumfix: padding });
    }
}
//# sourceMappingURL=pad.js.map