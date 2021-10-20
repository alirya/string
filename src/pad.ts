import AffixOption from "./affix/affix";
import Affix from "./affix/affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";
import String from "./string/string";
import Padding from "./padding/padding";

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
export default function Pad({
    string,
    padding,
    length,
    affix
} : String & Padding & {length:number} & Affix) : string {

    switch (affix) {
        case AffixOption.PREFIX :
            return PadPrefix({string, length, prefix:padding});

        case AffixOption.SUFFIX :
            return PadSuffix({string, length, suffix:padding});

        case AffixOption.CIRCUMFIX :
            return PadCircumfix({string, length, circumfix:padding});
    }
}
