import AffixOption from './affix/affix';
import PadPrefix from './pad-prefix-parameters';
import PadSuffix from './pad-suffix-parameters';
import PadCircumfix from './pad-circumfix-parameters';

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
            return PadPrefix(value, length, padding);

        case AffixOption.SUFFIX :
            return PadSuffix(value, length, padding);

        case AffixOption.CIRCUMFIX :
            return PadCircumfix(value, length, padding);
    }

}
