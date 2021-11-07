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
export default function PadOptionParameters(
    value : string,
    padding : string,
    length : number,
    affix : AffixOption
) : string {

    switch (affix) {
        case AffixOption.PREFIX :
            return PadPrefix.Parameters(value, length, padding);

        case AffixOption.SUFFIX :
            return PadSuffix.Parameters(value, length, padding);

        case AffixOption.CIRCUMFIX :
            return PadCircumfix.Parameters(value, length, padding);
    }

}
